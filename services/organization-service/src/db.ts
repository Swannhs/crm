import { PrismaClient } from "../generated-rbac/prisma/index.js";

export const prisma = new PrismaClient();
export const db = prisma;
