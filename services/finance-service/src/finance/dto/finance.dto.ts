import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional, IsUUID, Max, Min } from "class-validator";

export class YearQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2000)
  @Max(2100)
  year?: number;
}

export class LimitQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  limit?: number;
}

export class PeriodQueryDto {
  @IsOptional()
  @IsIn(["daily", "weekly", "monthly", "quarterly", "yearly"])
  period?: string;
}

export class DeleteAccountDto {
  @IsUUID("4")
  organizationId!: string;
}
