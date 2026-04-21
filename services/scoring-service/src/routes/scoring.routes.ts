import { Router } from 'express';
import { requireIdentityContext } from '../lib/node-service-kit.js';
import { crmScoringSyncService } from '../services/crm-scoring-sync.service.js';
import { scoringService } from '../services/scoring.service.js';

const router = Router();

const allowedOperators = new Set([
  'equals',
  'not_equals',
  'greater_than',
  'greater_or_equal',
  'less_than',
  'less_or_equal',
  'contains',
  'not_contains',
  'in',
  'not_in',
  'exists',
  'not_exists',
  'between',
  'days_since_less_than',
  'days_since_greater_than'
]);

function assertObject(value: unknown, message: string): asserts value is Record<string, any> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(message);
  }
}

function parseCreateModelPayload(body: unknown) {
  assertObject(body, 'Request body must be an object');

  if (typeof body.name !== 'string' || body.name.trim() === '') {
    throw new Error('Model name is required');
  }

  if (!Array.isArray(body.rules) || body.rules.length === 0) {
    throw new Error('At least one scoring rule is required');
  }

  const rules = body.rules.map((rule, index) => {
    assertObject(rule, `Rule ${index + 1} must be an object`);
    if (typeof rule.name !== 'string' || rule.name.trim() === '') {
      throw new Error(`Rule ${index + 1} name is required`);
    }
    if (!Array.isArray(rule.conditions) || rule.conditions.length === 0) {
      throw new Error(`Rule ${index + 1} must include at least one condition`);
    }

    for (const condition of rule.conditions) {
      assertObject(condition, `Rule ${index + 1} contains an invalid condition`);
      if (typeof condition.field !== 'string' || condition.field.trim() === '') {
        throw new Error(`Rule ${index + 1} condition field is required`);
      }
      if (typeof condition.operator !== 'string' || !allowedOperators.has(condition.operator)) {
        throw new Error(`Rule ${index + 1} contains an unsupported operator`);
      }
    }

    if (typeof rule.points !== 'number' || !Number.isInteger(rule.points)) {
      throw new Error(`Rule ${index + 1} points must be an integer`);
    }

    return {
      name: rule.name,
      entityType: typeof rule.entityType === 'string' ? rule.entityType : 'contact',
      conditions: rule.conditions,
      points: rule.points,
      isActive: typeof rule.isActive === 'boolean' ? rule.isActive : undefined,
      priority: typeof rule.priority === 'number' ? rule.priority : undefined
    };
  });

  return {
    name: body.name,
    description: typeof body.description === 'string' ? body.description : undefined,
    thresholds: body.thresholds && typeof body.thresholds === 'object' ? body.thresholds : undefined,
    isActive: typeof body.isActive === 'boolean' ? body.isActive : undefined,
    rules
  };
}

function parseCalculateScoresPayload(body: unknown) {
  assertObject(body, 'Request body must be an object');

  if (!Array.isArray(body.contacts) || body.contacts.length === 0) {
    throw new Error('At least one contact is required');
  }

  return {
    modelId: typeof body.modelId === 'string' ? body.modelId : undefined,
    contacts: body.contacts.map((contact, index) => {
      assertObject(contact, `Contact ${index + 1} must be an object`);
      if (typeof contact.contactId !== 'string' || contact.contactId.trim() === '') {
        throw new Error(`Contact ${index + 1} must include contactId`);
      }
      assertObject(contact.attributes, `Contact ${index + 1} must include attributes`);

      return {
        contactId: contact.contactId,
        attributes: contact.attributes
      };
    })
  };
}

router.use(requireIdentityContext());

router.get('/models', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const models = await scoringService.listModels(orgId);

    res.json({
      success: true,
      data: models
    });
  } catch (error) {
    next(error);
  }
});

router.post('/models', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const payload = parseCreateModelPayload(req.body);
    const model = await scoringService.createModel(orgId, payload);

    res.status(201).json({
      success: true,
      data: model
    });
  } catch (error) {
    next(error);
  }
});

router.post('/calculate', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const payload = parseCalculateScoresPayload(req.body);
    const result = await scoringService.calculateScores(orgId, payload);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
});

router.get('/contacts/:contactId/score', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;
    const { contactId } = req.params;
    const modelId = typeof req.query.modelId === 'string' ? req.query.modelId : undefined;
    const refresh = req.query.refresh === 'true';

    if (refresh) {
      const refreshed = await crmScoringSyncService.recalculateContactFromSource(orgId, userId, contactId, modelId);
      res.json({
        success: true,
        data: refreshed.result
      });
      return;
    }

    const score = await scoringService.getContactScore(orgId, contactId, modelId);

    if (!score) {
      const recalculated = await crmScoringSyncService.recalculateContactFromSource(orgId, userId, contactId, modelId);
      res.json({
        success: true,
        data: recalculated.result
      });
      return;
    }

    res.json({
      success: true,
      data: score
    });
  } catch (error) {
    next(error);
  }
});

router.get('/leads/hot', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const minimumScore = Number(req.query.minimumScore ?? 70);
    const limit = Number(req.query.limit ?? 25);
    const leads = await scoringService.getHotLeads(orgId, minimumScore, limit);

    res.json({
      success: true,
      data: leads
    });
  } catch (error) {
    next(error);
  }
});

router.post('/sync/contacts/:contactId', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;
    const { contactId } = req.params;
    const modelId = typeof req.body?.modelId === 'string' ? req.body.modelId : undefined;
    const result = await crmScoringSyncService.recalculateContactFromSource(orgId, userId, contactId, modelId);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
});

router.post('/sync', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;
    const modelId = typeof req.body?.modelId === 'string' ? req.body.modelId : undefined;
    const result = await crmScoringSyncService.recalculateAllContactsFromSource(orgId, userId, modelId);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
});

export default router;
