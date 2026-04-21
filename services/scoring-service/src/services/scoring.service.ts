import type { Prisma } from '../../generated/prisma/index.js';
import { scoringRepository, type CreateScoringModelInput, type ScoringModelWithRules } from '../repositories/scoring.repository.js';

type Thresholds = Record<string, number>;

interface ScoreContactInput {
  contactId: string;
  attributes: Record<string, unknown>;
}

interface CalculateScoresInput {
  modelId?: string;
  contacts: ScoreContactInput[];
}

interface RuleCondition {
  field: string;
  operator:
    | 'equals'
    | 'not_equals'
    | 'greater_than'
    | 'greater_or_equal'
    | 'less_than'
    | 'less_or_equal'
    | 'contains'
    | 'not_contains'
    | 'in'
    | 'not_in'
    | 'exists'
    | 'not_exists'
    | 'between'
    | 'days_since_less_than'
    | 'days_since_greater_than';
  value?: unknown;
  min?: number;
  max?: number;
}

function getFieldValue(source: Record<string, unknown>, field: string): unknown {
  return field.split('.').reduce<unknown>((current, segment) => {
    if (current === null || typeof current !== 'object' || !(segment in current)) {
      return undefined;
    }

    return (current as Record<string, unknown>)[segment];
  }, source);
}

function toNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function daysSince(value: unknown): number | null {
  if (typeof value !== 'string' && !(value instanceof Date)) {
    return null;
  }

  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((Date.now() - date.getTime()) / msPerDay);
}

function matchesCondition(attributes: Record<string, unknown>, condition: RuleCondition): boolean {
  const actualValue = getFieldValue(attributes, condition.field);

  switch (condition.operator) {
    case 'equals':
      return actualValue === condition.value;
    case 'not_equals':
      return actualValue !== condition.value;
    case 'greater_than': {
      const actual = toNumber(actualValue);
      const expected = toNumber(condition.value);
      return actual !== null && expected !== null && actual > expected;
    }
    case 'greater_or_equal': {
      const actual = toNumber(actualValue);
      const expected = toNumber(condition.value);
      return actual !== null && expected !== null && actual >= expected;
    }
    case 'less_than': {
      const actual = toNumber(actualValue);
      const expected = toNumber(condition.value);
      return actual !== null && expected !== null && actual < expected;
    }
    case 'less_or_equal': {
      const actual = toNumber(actualValue);
      const expected = toNumber(condition.value);
      return actual !== null && expected !== null && actual <= expected;
    }
    case 'contains':
      return Array.isArray(actualValue)
        ? actualValue.includes(condition.value)
        : typeof actualValue === 'string' && typeof condition.value === 'string' && actualValue.toLowerCase().includes(condition.value.toLowerCase());
    case 'not_contains':
      return !matchesCondition(attributes, { ...condition, operator: 'contains' });
    case 'in':
      return Array.isArray(condition.value) && condition.value.includes(actualValue);
    case 'not_in':
      return Array.isArray(condition.value) && !condition.value.includes(actualValue);
    case 'exists':
      return actualValue !== undefined && actualValue !== null && actualValue !== '';
    case 'not_exists':
      return actualValue === undefined || actualValue === null || actualValue === '';
    case 'between': {
      const actual = toNumber(actualValue);
      const min = condition.min ?? toNumber(condition.value);
      const max = condition.max ?? toNumber(condition.value);
      return actual !== null && min !== null && max !== null && actual >= min && actual <= max;
    }
    case 'days_since_less_than': {
      const delta = daysSince(actualValue);
      const expected = toNumber(condition.value);
      return delta !== null && expected !== null && delta < expected;
    }
    case 'days_since_greater_than': {
      const delta = daysSince(actualValue);
      const expected = toNumber(condition.value);
      return delta !== null && expected !== null && delta > expected;
    }
    default:
      return false;
  }
}

function deriveGrade(score: number, thresholds: Thresholds): string {
  const orderedThresholds = Object.entries(thresholds).sort((a, b) => b[1] - a[1]);
  const matched = orderedThresholds.find(([, minimum]) => score >= minimum);
  return matched?.[0] ?? 'F';
}

function normalizeScore(score: number): number {
  if (score < 0) return 0;
  if (score > 100) return 100;
  return Math.round(score);
}

function isRuleCondition(value: unknown): value is RuleCondition {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return typeof candidate.field === 'string' && typeof candidate.operator === 'string';
}

function parseConditions(rawConditions: Prisma.JsonValue): RuleCondition[] {
  if (!Array.isArray(rawConditions)) {
    return [];
  }

  return rawConditions.filter((value) => isRuleCondition(value)) as RuleCondition[];
}

export class ScoringService {
  async listModels(orgId: string) {
    return scoringRepository.listModels(orgId);
  }

  async createModel(orgId: string, input: CreateScoringModelInput) {
    return scoringRepository.createModel(orgId, input);
  }

  async getContactScore(orgId: string, contactId: string, modelId?: string) {
    return scoringRepository.getLeadScore(orgId, contactId, modelId);
  }

  async getHotLeads(orgId: string, minimumScore: number, limit: number) {
    return scoringRepository.getHotLeads(orgId, minimumScore, limit);
  }

  async calculateScores(orgId: string, input: CalculateScoresInput) {
    const model = input.modelId
      ? await scoringRepository.findModelById(input.modelId, orgId)
      : await scoringRepository.findActiveModel(orgId);

    if (!model) {
      throw new Error('No active scoring model found for this organization');
    }

    const thresholds = (model.thresholds as Thresholds | null) ?? { A: 80, B: 60, C: 40, D: 20 };
    const results = await Promise.all(
      input.contacts.map((contact) => this.scoreContact(orgId, model, thresholds, contact))
    );

    return {
      modelId: model.id,
      scoredContacts: results.length,
      results
    };
  }

  private async scoreContact(
    orgId: string,
    model: ScoringModelWithRules,
    thresholds: Thresholds,
    contact: ScoreContactInput
  ) {
    let rawScore = 0;
    const matchedRules: Array<{ ruleId: string; ruleName: string; points: number; conditionCount: number }> = [];

    for (const rule of model.rules) {
      const conditions = parseConditions(rule.conditions);
      if (conditions.length === 0) {
        continue;
      }

      const matched = conditions.every((condition) => matchesCondition(contact.attributes, condition));
      if (!matched) {
        continue;
      }

      rawScore += rule.points;
      matchedRules.push({
        ruleId: rule.id,
        ruleName: rule.name,
        points: rule.points,
        conditionCount: conditions.length
      });
    }

    const score = normalizeScore(rawScore);
    const grade = deriveGrade(score, thresholds);
    const factors = {
      matchedRules,
      totalRulesEvaluated: model.rules.length,
      totalRulesMatched: matchedRules.length
    };

    const persisted = await scoringRepository.upsertLeadScore({
      orgId,
      contactId: contact.contactId,
      modelId: model.id,
      score,
      grade,
      factors: factors as Prisma.InputJsonValue
    });

    return {
      contactId: contact.contactId,
      score: persisted.score,
      grade: persisted.grade,
      previousScore: persisted.previousScore,
      factors
    };
  }
}

export const scoringService = new ScoringService();
