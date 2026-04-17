<?php

namespace App\Jobs;

use App\Models\Contact;
use App\Models\OutboxEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class ImportContactsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        protected string $orgId,
        protected string $userId,
        protected array $contactsData
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Log::info("Starting bulk import for Org: {$this->orgId}, User: {$this->userId}", [
            'count' => count($this->contactsData)
        ]);

        foreach (array_chunk($this->contactsData, 100) as $chunk) {
            DB::transaction(function () use ($chunk) {
                foreach ($chunk as $data) {
                    try {
                        $contact = Contact::query()->create([
                            'id' => (string) Str::uuid(),
                            'org_id' => $this->orgId,
                            'created_by_user_id' => $this->userId,
                            'name' => $data['name'] ?? 'Imported Contact',
                            'first_name' => $data['first_name'] ?? null,
                            'last_name' => $data['last_name'] ?? null,
                            'email' => $data['email'] ?? null,
                            'phone' => $data['phone'] ?? null,
                            'status' => $data['status'] ?? 'active',
                            'metadata' => array_merge($data['metadata'] ?? [], [
                                'imported_at' => now()->toIso8601String(),
                                'source' => 'bulk_import'
                            ]),
                        ]);

                        OutboxEvent::record(
                            type: 'crm.contact.created',
                            aggregateType: 'contact',
                            aggregateId: $contact->id,
                            orgId: $this->orgId,
                            actorUserId: $this->userId,
                            data: ['contact_id' => $contact->id, 'import_source' => 'bulk']
                        );
                    } catch (\Exception $e) {
                        Log::error("Failed to import contact in bulk", [
                            'error' => $e->getMessage(),
                            'data' => $data
                        ]);
                    }
                }
            });
        }

        Log::info("Finished bulk import for Org: {$this->orgId}");
    }
}
