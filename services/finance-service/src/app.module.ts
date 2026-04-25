import { Module } from "@nestjs/common";
import { FinanceModule } from "./finance/finance.module.js";
import { HealthController } from "./health/health.controller.js";

@Module({
  imports: [FinanceModule],
  controllers: [HealthController],
})
export class AppModule {}
