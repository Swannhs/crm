import { crmClient, type CrmContact } from '../clients/crm.client.js';
import { dealClient, type DealRecord } from '../clients/deal.client.js';
import { scoringService } from './scoring.service.js';

function amountToNumber(value: string | number | null | undefined): number {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

function sortByNewestDate(deals: DealRecord[]): DealRecord[] {
  return [...deals].sort((a, b) => {
    const aTime = new Date(a.updatedAt ?? a.createdAt ?? 0).getTime();
    const bTime = new Date(b.updatedAt ?? b.createdAt ?? 0).getTime();
    return bTime - aTime;
  });
}

function buildAttributes(contact: CrmContact, deals: DealRecord[]): Record<string, unknown> {
  const openDeals = deals.filter((deal) => !['closed_won', 'closed_lost'].includes(deal.stage ?? ''));
  const wonDeals = deals.filter((deal) => deal.stage === 'closed_won');
  const lostDeals = deals.filter((deal) => deal.stage === 'closed_lost');
  const latestDeal = sortByNewestDate(deals)[0];
  const totalOpenValue = openDeals.reduce((sum, deal) => sum + amountToNumber(deal.amount), 0);
  const totalWonValue = wonDeals.reduce((sum, deal) => sum + amountToNumber(deal.amount), 0);
  const averageProbability = openDeals.length > 0
    ? Math.round(openDeals.reduce((sum, deal) => sum + (deal.probability ?? 0), 0) / openDeals.length)
    : 0;

  return {
    contact: {
      ...contact,
      hasEmail: Boolean(contact.email),
      hasPhone: Boolean(contact.phone),
      marketingOptIn: Boolean(contact.marketing_email_opt_in || contact.marketing_sms_opt_in),
      createdDaysAgo: contact.created_at
    },
    deals: {
      total: deals.length,
      openCount: openDeals.length,
      wonCount: wonDeals.length,
      lostCount: lostDeals.length,
      totalOpenValue,
      totalWonValue,
      averageProbability,
      latestSource: latestDeal?.source ?? null,
      latestStage: latestDeal?.stage ?? null,
      latestPriority: latestDeal?.priority ?? null,
      latestUpdatedAt: latestDeal?.updatedAt ?? latestDeal?.createdAt ?? null
    }
  };
}

export class CrmScoringSyncService {
  async recalculateContactFromSource(orgId: string, userId: string, contactId: string, modelId?: string) {
    const contact = await crmClient.getContact(orgId, userId, contactId);
    if (!contact) {
      throw new Error('Contact not found in Odoo contact source');
    }

    const deals = await dealClient.listDealsForContact(orgId, userId, contactId);
    const attributes = buildAttributes(contact, deals);

    const result = await scoringService.calculateScores(orgId, {
      modelId,
      contacts: [
        {
          contactId,
          attributes
        }
      ]
    });

    return {
      source: {
        contact,
        dealsSummary: {
          count: deals.length
        }
      },
      result: result.results[0]
    };
  }

  async recalculateAllContactsFromSource(orgId: string, userId: string, modelId?: string) {
    const contacts = await crmClient.listContacts(orgId, userId);
    const hydratedContacts = await Promise.all(
      contacts.map(async (contact) => {
        const deals = await dealClient.listDealsForContact(orgId, userId, contact.id);
        return {
          contactId: contact.id,
          attributes: buildAttributes(contact, deals)
        };
      })
    );

    if (hydratedContacts.length === 0) {
      return {
        sourceContacts: 0,
        scoredContacts: 0,
        results: []
      };
    }

    const result = await scoringService.calculateScores(orgId, {
      modelId,
      contacts: hydratedContacts
    });

    return {
      sourceContacts: contacts.length,
      scoredContacts: result.scoredContacts,
      results: result.results
    };
  }
}

export const crmScoringSyncService = new CrmScoringSyncService();
