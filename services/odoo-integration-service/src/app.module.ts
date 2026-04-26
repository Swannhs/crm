import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './modules/contacts/contacts.module.js';
import { CrmModule } from './modules/crm/crm.module.js';
import { SalesModule } from './modules/sales/sales.module.js';
import { AccountingModule } from './modules/accounting/accounting.module.js';
import { InventoryModule } from './modules/inventory/inventory.module.js';
import { SyncModule } from './modules/sync/sync.module.js';
import { AnalyticsModule } from './modules/analytics/analytics.module.js';
import { DashboardModule } from './modules/dashboard/dashboard.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ContactsModule,
    CrmModule,
    SalesModule,
    AccountingModule,
    InventoryModule,
    SyncModule,
    AnalyticsModule,
    DashboardModule,
  ],
})
export class AppModule {}
