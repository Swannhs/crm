<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\OutboxEvent;
use App\Models\Pipeline;
use App\Models\PipelineContact;
use App\Models\PipelineStage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class PipelineController extends Controller
{
    /**
     * List all pipelines for organization
     */
    public function index(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');

        $pipelines = Pipeline::where('org_id', $orgId)
            ->with(['stages' => fn ($q) => $q->orderBy('order')])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json(['data' => $pipelines]);
    }

    /**
     * Create a new pipeline
     */
    public function store(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'stages' => 'nullable|array',
            'stages.*.name' => 'required_with:stages|string|max:255',
            'stages.*.order' => 'required_with:stages|integer',
            'stages.*.color' => 'nullable|string|max:10',
        ]);

        $pipeline = DB::transaction(function () use ($validated, $orgId, $userId): Pipeline {
            $pipeline = Pipeline::create([
                'id' => (string) Str::uuid(),
                'org_id' => $orgId,
                'created_by_user_id' => $userId,
                'name' => $validated['name'],
                'description' => $validated['description'] ?? null,
                'status' => 'active',
                'metadata' => [],
            ]);

            if (!empty($validated['stages'])) {
                foreach ($validated['stages'] as $stage) {
                    PipelineStage::create([
                        'id' => (string) Str::uuid(),
                        'pipeline_id' => $pipeline->id,
                        'name' => $stage['name'],
                        'order' => $stage['order'],
                        'color' => $stage['color'] ?? '#3b82f6',
                    ]);
                }
            } else {
                foreach (['New', 'Qualified', 'Negotiation', 'Closed'] as $idx => $name) {
                    PipelineStage::create([
                        'id' => (string) Str::uuid(),
                        'pipeline_id' => $pipeline->id,
                        'name' => $name,
                        'order' => $idx,
                    ]);
                }
            }

            OutboxEvent::record(
                type: 'crm.pipeline.created',
                aggregateType: 'pipeline',
                aggregateId: $pipeline->id,
                orgId: $orgId,
                actorUserId: $userId,
                data: ['pipeline_id' => $pipeline->id]
            );

            return $pipeline->load('stages');
        });

        return response()->json(['data' => $pipeline], Response::HTTP_CREATED);
    }

    /**
     * Get a single pipeline with stages
     */
    public function show(Request $request, Pipeline $pipeline): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');

        if ($pipeline->org_id !== $orgId) {
            abort(Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $pipeline->load(['stages' => fn ($q) => $q->orderBy('order')])
        ]);
    }

    /**
     * Update a pipeline
     */
    public function update(Request $request, Pipeline $pipeline): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        if ($pipeline->org_id !== $orgId) {
            abort(Response::HTTP_NOT_FOUND);
        }

        $validated = $request->validate([
            'name' => ['sometimes', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'status' => ['sometimes', 'in:active,inactive'],
        ]);

        DB::transaction(function () use ($validated, $pipeline, $orgId, $userId): void {
            $pipeline->fill($validated)->save();

            OutboxEvent::record(
                type: 'crm.pipeline.updated',
                aggregateType: 'pipeline',
                aggregateId: $pipeline->id,
                orgId: $orgId,
                actorUserId: $userId,
                data: ['pipeline_id' => $pipeline->id]
            );
        });

        return response()->json(['data' => $pipeline->fresh()]);
    }

    /**
     * Delete a pipeline
     */
    public function destroy(Request $request, Pipeline $pipeline): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        if ($pipeline->org_id !== $orgId) {
            abort(Response::HTTP_NOT_FOUND);
        }

        DB::transaction(function () use ($pipeline, $orgId, $userId): void {
            $pipelineId = $pipeline->id;
            $pipeline->delete();

            OutboxEvent::record(
                type: 'crm.pipeline.deleted',
                aggregateType: 'pipeline',
                aggregateId: $pipelineId,
                orgId: $orgId,
                actorUserId: $userId,
                data: ['pipeline_id' => $pipelineId]
            );
        });

        return response()->json(['status' => 'ok']);
    }

    /**
     * Add contact to pipeline stage
     */
    public function addContact(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $validated = $request->validate([
            'pipeline_id' => 'required|uuid',
            'stage_id' => 'required|uuid',
            'contact_id' => 'required|uuid',
            'opportunity_value_cents' => 'nullable|integer|min:0',
        ]);

        $pipelineContact = DB::transaction(function () use ($validated, $orgId, $userId): PipelineContact {
            $pipeline = Pipeline::where('id', $validated['pipeline_id'])
                ->where('org_id', $orgId)
                ->firstOrFail();

            $stage = PipelineStage::where('id', $validated['stage_id'])
                ->where('pipeline_id', $pipeline->id)
                ->firstOrFail();

            Contact::where('id', $validated['contact_id'])
                ->where('org_id', $orgId)
                ->firstOrFail();

            // Move to new stage if already in pipeline
            $existing = PipelineContact::where('contact_id', $validated['contact_id'])
                ->where('pipeline_id', $pipeline->id)
                ->first();

            if ($existing) {
                $existing->update([
                    'stage_id' => $stage->id,
                    'opportunity_value_cents' => $validated['opportunity_value_cents'] ?? $existing->opportunity_value_cents,
                ]);
                return $existing;
            }

            $maxOrder = PipelineContact::where('stage_id', $stage->id)->max('order') ?? -1;

            $pipelineContact = PipelineContact::create([
                'id' => (string) Str::uuid(),
                'pipeline_id' => $pipeline->id,
                'stage_id' => $stage->id,
                'contact_id' => $validated['contact_id'],
                'org_id' => $orgId,
                'opportunity_value_cents' => $validated['opportunity_value_cents'] ?? 0,
                'order' => $maxOrder + 1,
                'added_at' => now(),
            ]);

            OutboxEvent::record(
                type: 'crm.pipeline.contact_added',
                aggregateType: 'pipeline_contact',
                aggregateId: $pipelineContact->id,
                orgId: $orgId,
                actorUserId: $userId,
                data: [
                    'pipeline_contact_id' => $pipelineContact->id,
                    'contact_id' => $validated['contact_id'],
                    'stage_id' => $stage->id,
                ]
            );

            return $pipelineContact;
        });

        return response()->json(['data' => $pipelineContact], Response::HTTP_CREATED);
    }

    /**
     * Move contact between stages
     */
    public function moveContact(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $validated = $request->validate([
            'pipeline_contact_id' => 'required|uuid',
            'new_stage_id' => 'required|uuid',
            'new_order' => 'nullable|integer|min:0',
        ]);

        $pipelineContact = DB::transaction(function () use ($validated, $orgId, $userId): PipelineContact {
            $pipelineContact = PipelineContact::where('id', $validated['pipeline_contact_id'])
                ->where('org_id', $orgId)
                ->firstOrFail();

            $oldStageId = $pipelineContact->stage_id;
            $pipelineContact->update([
                'stage_id' => $validated['new_stage_id'],
                'order' => $validated['new_order'] ?? $pipelineContact->order,
            ]);

            OutboxEvent::record(
                type: 'crm.pipeline.contact_moved',
                aggregateType: 'pipeline_contact',
                aggregateId: $pipelineContact->id,
                orgId: $orgId,
                actorUserId: $userId,
                data: [
                    'pipeline_contact_id' => $pipelineContact->id,
                    'from_stage_id' => $oldStageId,
                    'to_stage_id' => $validated['new_stage_id'],
                ]
            );

            return $pipelineContact;
        });

        return response()->json(['data' => $pipelineContact]);
    }

    /**
     * Get pipeline with all contacts by stage
     */
    public function pipelineView(Request $request, Pipeline $pipeline): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');

        if ($pipeline->org_id !== $orgId) {
            abort(Response::HTTP_NOT_FOUND);
        }

        $stages = PipelineStage::where('pipeline_id', $pipeline->id)
            ->with(['contacts' => fn ($q) => $q->orderBy('order')])
            ->orderBy('order')
            ->get();

        return response()->json([
            'data' => [
                'pipeline' => $pipeline,
                'stages' => $stages,
            ]
        ]);
    }
}
