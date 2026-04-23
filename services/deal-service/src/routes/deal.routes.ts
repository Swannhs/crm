import { Router } from 'express';
import { dealService } from '../services/deal.service.js';
import { requireIdentityContext } from '@mymanager/node-service-kit';

const router = Router();
const identityMiddleware = (req: any, res: any, next: any) => requireIdentityContext(req, res, next);

// All routes require identity context (orgId, userId)
router.use(identityMiddleware);

// GET /deals - List all deals with optional filters
router.get('/', async (req, res, next) => {
  try {
    const { stage, ownerId, contactId, search, limit, offset } = req.query;
    const orgId = req.identity!.orgId;

    const result = await dealService.getDeals(orgId, {
      stage: stage as string,
      ownerId: ownerId as string,
      contactId: contactId as string,
      search: search as string,
      limit: limit ? parseInt(limit as string) : undefined,
      offset: offset ? parseInt(offset as string) : undefined
    });

    res.json({
      success: true,
      data: result.deals,
      meta: {
        total: result.total,
        limit: limit || 50,
        offset: offset || 0
      }
    });
  } catch (error) {
    next(error);
  }
});

// GET /deals/stats - Get pipeline statistics
router.get('/stats', async (req, res, next) => {
  try {
    const { pipelineId } = req.query;
    const orgId = req.identity!.orgId;

    const stats = await dealService.getPipelineStats(orgId, pipelineId as string);

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    next(error);
  }
});

// GET /deals/forecast - Get sales forecast
router.get('/forecast', async (req, res, next) => {
  try {
    const { ownerId } = req.query;
    const orgId = req.identity!.orgId;

    const forecast = await dealService.getForecast(orgId, ownerId as string);

    res.json({
      success: true,
      data: forecast
    });
  } catch (error) {
    next(error);
  }
});

// GET /deals/:id - Get single deal
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const orgId = req.identity!.orgId;

    const deal = await dealService.getDeal(id, orgId);

    if (!deal) {
      return res.status(404).json({
        success: false,
        error: 'Deal not found'
      });
    }

    res.json({
      success: true,
      data: deal
    });
  } catch (error) {
    next(error);
  }
});

// POST /deals - Create new deal
router.post('/', async (req, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    const ownerId = req.identity!.userId; // Default to current user

    const data = {
      ...req.body,
      ownerId: req.body.ownerId || ownerId
    };

    const deal = await dealService.createDeal(data, orgId);

    res.status(201).json({
      success: true,
      data: deal
    });
  } catch (error) {
    next(error);
  }
});

// PUT /deals/:id - Update deal
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const orgId = req.identity!.orgId;

    const deal = await dealService.updateDeal(id, orgId, req.body);

    res.json({
      success: true,
      data: deal
    });
  } catch (error) {
    next(error);
  }
});

// PATCH /deals/:id/stage - Move deal to different stage
router.patch('/:id/stage', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { stage } = req.body;
    const orgId = req.identity!.orgId;

    if (!stage) {
      return res.status(400).json({
        success: false,
        error: 'Stage is required'
      });
    }

    const deal = await dealService.moveDealStage(id, orgId, stage);

    res.json({
      success: true,
      data: deal
    });
  } catch (error) {
    next(error);
  }
});

// DELETE /deals/:id - Delete deal
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const orgId = req.identity!.orgId;

    await dealService.deleteDeal(id, orgId);

    res.json({
      success: true,
      message: 'Deal deleted successfully'
    });
  } catch (error) {
    next(error);
  }
});

export default router;
