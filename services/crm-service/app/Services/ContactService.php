<?php

namespace App\Services;

use App\Jobs\ImportContactsJob;
use App\Models\Contact;
use App\Models\OutboxEvent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ContactService
{
    /**
     * Dispatches a bulk import job.
     */
    public function import(string $orgId, string $userId, array $contactsData): void
    {
        ImportContactsJob::dispatch($orgId, $userId, $contactsData);
    }

    /**
     * Merges one or more duplicate contacts into a primary contact.
     *
     * @param string $orgId
     * @param string $userId
     * @param string $primaryId
     * @param array $duplicateIds
     * @return Contact
     */
    public function merge(string $orgId, string $userId, string $primaryId, array $duplicateIds): Contact
    {
        return DB::transaction(function () use ($orgId, $userId, $primaryId, $duplicateIds) {
            $primary = Contact::query()
                ->where('org_id', $orgId)
                ->where('id', $primaryId)
                ->firstOrFail();

            $duplicates = Contact::query()
                ->where('org_id', $orgId)
                ->whereIn('id', $duplicateIds)
                ->where('id', '!=', $primaryId)
                ->get();

            foreach ($duplicates as $duplicate) {
                $duplicate->update([
                    'merged_into_id' => $primary->id,
                    'merged_at' => now(),
                    'status' => 'inactive',
                ]);

                // Record the merge event for downstream services (Strangler pattern)
                OutboxEvent::record(
                    type: 'crm.contact.merged',
                    aggregateType: 'contact',
                    aggregateId: $duplicate->id,
                    orgId: $orgId,
                    actorUserId: $userId,
                    data: [
                        'duplicate_id' => $duplicate->id,
                        'primary_id' => $primary->id,
                    ]
                );
            }

            return $primary;
        });
    }
}
