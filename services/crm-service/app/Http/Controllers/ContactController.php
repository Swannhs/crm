<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\OutboxEvent;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');

        $query = Contact::query()
            ->where('org_id', $orgId)
            ->orderByDesc('created_at');

        if ($request->filled('q')) {
            $q = '%'.strtolower($request->string('q')->toString()).'%';
            $query->where(function ($sub) use ($q): void {
                $sub->whereRaw('LOWER(name) LIKE ?', [$q])
                    ->orWhereRaw('LOWER(email) LIKE ?', [$q])
                    ->orWhereRaw('LOWER(phone) LIKE ?', [$q]);
            });
        }

        return response()->json([
            'data' => $query->limit(100)->get(),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:200'],
            'email' => ['nullable', 'string', 'email:rfc', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40'],
            'metadata' => ['nullable', 'array'],
        ]);

        $contact = DB::transaction(function () use ($validated, $orgId, $userId): Contact {
            $contact = Contact::query()->create([
                'id' => (string) Str::uuid(),
                'org_id' => $orgId,
                'created_by_user_id' => $userId,
                'name' => $validated['name'],
                'email' => $validated['email'] ?? null,
                'phone' => $validated['phone'] ?? null,
                'metadata' => $validated['metadata'] ?? [],
            ]);

            OutboxEvent::record(
                type: 'crm.contact.created',
                aggregateType: 'contact',
                aggregateId: $contact->id,
                orgId: $orgId,
                actorUserId: $userId,
                data: ['contact_id' => $contact->id]
            );

            return $contact;
        });

        return response()->json(['data' => $contact], Response::HTTP_CREATED);
    }

    public function show(Request $request, Contact $contact): JsonResponse
    {
        $this->assertOrgScope($request, $contact);

        return response()->json(['data' => $contact]);
    }

    public function update(Request $request, Contact $contact): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $this->assertOrgScope($request, $contact);

        $validated = $request->validate([
            'name' => ['sometimes', 'string', 'max:200'],
            'email' => ['sometimes', 'nullable', 'string', 'email:rfc', 'max:255'],
            'phone' => ['sometimes', 'nullable', 'string', 'max:40'],
            'metadata' => ['sometimes', 'array'],
        ]);

        DB::transaction(function () use ($validated, $contact, $orgId, $userId): void {
            $contact->fill($validated);
            $contact->save();

            OutboxEvent::record(
                type: 'crm.contact.updated',
                aggregateType: 'contact',
                aggregateId: $contact->id,
                orgId: $orgId,
                actorUserId: $userId,
                data: ['contact_id' => $contact->id]
            );
        });

        return response()->json(['data' => $contact->fresh()]);
    }

    public function destroy(Request $request, Contact $contact): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $this->assertOrgScope($request, $contact);

        DB::transaction(function () use ($contact, $orgId, $userId): void {
            $contactId = $contact->id;
            $contact->delete();

            OutboxEvent::record(
                type: 'crm.contact.deleted',
                aggregateType: 'contact',
                aggregateId: $contactId,
                orgId: $orgId,
                actorUserId: $userId,
                data: ['contact_id' => $contactId]
            );
        });

        return response()->json(['status' => 'ok']);
    }

    private function assertOrgScope(Request $request, Contact $contact): void
    {
        $orgId = (string) $request->attributes->get('org_id');

        if ($contact->org_id !== $orgId) {
            abort(Response::HTTP_NOT_FOUND);
        }
    }
}

