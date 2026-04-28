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
import { PostsModule } from './modules/posts/posts.module.js';
import { ProjectsModule } from './modules/projects/projects.module.js';
import { PosModule } from './modules/pos/pos.module.js';
import { MagentoCompatibilityModule } from './modules/magento-compatibility/magento-compatibility.module.js';
import { PrismaModule } from './common/prisma/prisma.module.js';
import { EmployeesModule } from './modules/employees/employees.module.js';
import { BookingModule } from './modules/booking/booking.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ContactsModule,
    CrmModule,
    SalesModule,
    AccountingModule,
    InventoryModule,
    SyncModule,
    AnalyticsModule,
    DashboardModule,
    PostsModule,
    ProjectsModule,
    PosModule,
    EmployeesModule,
    BookingModule,
    MagentoCompatibilityModule,
  ],
})

export class AppModule {}
