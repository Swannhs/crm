<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\OutboxEvent;
use App\Services\ContactService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    public function __construct(
        protected ContactService $contactService
    ) {}

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

        $rules = [
            'name' => ['required', 'string', 'max:200'],
            'first_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['nullable', 'string', 'max:100'],
            'email' => ['nullable', 'string', 'email:rfc', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40'],
            'dob' => ['nullable', 'date'],
            'gender' => ['nullable', 'string', 'max:20'],
            'street' => ['nullable', 'string', 'max:255'],
            'city' => ['nullable', 'string', 'max:100'],
            'state' => ['nullable', 'string', 'max:100'],
            'zip_code' => ['nullable', 'string', 'max:20'],
            'country' => ['nullable', 'string', 'max:100'],
            'status' => ['sometimes', 'string', 'in:active,inactive,pending'],
            'type' => ['sometimes', 'string', 'in:individual,company'],
            'company_name' => ['nullable', 'string', 'max:200'],
            'marketing_email_opt_in' => ['sometimes', 'boolean'],
            'marketing_sms_opt_in' => ['sometimes', 'boolean'],
            'lead_source' => ['nullable', 'string', 'max:100'],
            'metadata' => ['nullable', 'array'],
        ];

        $validated = $request->validate($rules);

        $contact = DB::transaction(function () use ($validated, $orgId, $userId): Contact {
            $contact = Contact::query()->create(array_merge($validated, [
                'id' => (string) Str::uuid(),
                'org_id' => $orgId,
                'created_by_user_id' => $userId,
                'metadata' => $validated['metadata'] ?? [],
            ]));

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

        $rules = [
            'name' => ['sometimes', 'string', 'max:200'],
            'first_name' => ['sometimes', 'nullable', 'string', 'max:100'],
            'last_name' => ['sometimes', 'nullable', 'string', 'max:100'],
            'email' => ['sometimes', 'nullable', 'string', 'email:rfc', 'max:255'],
            'phone' => ['sometimes', 'nullable', 'string', 'max:40'],
            'dob' => ['sometimes', 'nullable', 'date'],
            'gender' => ['sometimes', 'nullable', 'string', 'max:20'],
            'street' => ['sometimes', 'nullable', 'string', 'max:255'],
            'city' => ['sometimes', 'nullable', 'string', 'max:100'],
            'state' => ['sometimes', 'nullable', 'string', 'max:100'],
            'zip_code' => ['sometimes', 'nullable', 'string', 'max:20'],
            'country' => ['sometimes', 'nullable', 'string', 'max:100'],
            'status' => ['sometimes', 'string', 'in:active,inactive,pending'],
            'type' => ['sometimes', 'string', 'in:individual,company'],
            'company_name' => ['sometimes', 'nullable', 'string', 'max:200'],
            'marketing_email_opt_in' => ['sometimes', 'boolean'],
            'marketing_sms_opt_in' => ['sometimes', 'boolean'],
            'lead_source' => ['sometimes', 'nullable', 'string', 'max:100'],
            'metadata' => ['sometimes', 'array'],
        ];

        $validated = $request->validate($rules);

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

    public function merge(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $validated = $request->validate([
            'primary_id' => ['required', 'uuid'],
            'duplicate_ids' => ['required', 'array', 'min:1'],
            'duplicate_ids.*' => ['uuid'],
        ]);

        $primary = $this->contactService->merge(
            $orgId,
            $userId,
            $validated['primary_id'],
            $validated['duplicate_ids']
        );

        return response()->json(['data' => $primary]);
    }

    public function import(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');
        $userId = (string) $request->attributes->get('user_id');

        $validated = $request->validate([
            'contacts' => ['required', 'array', 'min:1', 'max:5000'],
            'contacts.*.name' => ['required', 'string', 'max:200'],
            'contacts.*.email' => ['nullable', 'string', 'max:255'],
            'contacts.*.phone' => ['nullable', 'string', 'max:40'],
        ]);

        $this->contactService->import(
            $orgId,
            $userId,
            $validated['contacts']
        );

        return response()->json([
            'message' => 'Bulk import started successfully.',
            'count' => count($validated['contacts'])
        ], 202);
    }

    public function search(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');

        $q = $request->string('q')->toString();
        if (strlen($q) < 2) {
            return response()->json(['data' => []]);
        }

        $limit = min((int) $request->query('limit', 20), 100);
        $term = '%' . strtolower($q) . '%';

        $contacts = Contact::query()
            ->where('org_id', $orgId)
            ->where(function ($sub) use ($term): void {
                $sub->whereRaw('LOWER(name) LIKE ?', [$term])
                    ->orWhereRaw('LOWER(email) LIKE ?', [$term])
                    ->orWhereRaw('LOWER(phone) LIKE ?', [$term]);
            })
            ->limit($limit)
            ->get(['id', 'name', 'first_name', 'last_name', 'email', 'phone', 'status']);

        return response()->json(['data' => $contacts]);
    }

    public function statistics(Request $request): JsonResponse
    {
        $orgId = (string) $request->attributes->get('org_id');

        $total = Contact::query()->where('org_id', $orgId)->count();
        $active = Contact::query()->where('org_id', $orgId)->where('status', 'active')->count();
        $inactive = Contact::query()->where('org_id', $orgId)->where('status', 'inactive')->count();

        $byType = Contact::query()
            ->where('org_id', $orgId)
            ->selectRaw('type, COUNT(*) as count')
            ->groupBy('type')
            ->get();

        $newThisMonth = Contact::query()
            ->where('org_id', $orgId)
            ->where('created_at', '>=', now()->startOfMonth())
            ->count();

        return response()->json([
            'data' => [
                'total' => $total,
                'active' => $active,
                'inactive' => $inactive,
                'new_this_month' => $newThisMonth,
                'by_type' => $byType,
            ]
        ]);
    }

    private function assertOrgScope(Request $request, Contact $contact): void
    {
        $orgId = (string) $request->attributes->get('org_id');

        if ($contact->org_id !== $orgId) {
            abort(Response::HTTP_NOT_FOUND);
        }
    }
}

