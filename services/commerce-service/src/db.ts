import { PrismaClient } from "../generated-local/prisma/index.js";

export const prisma = new PrismaClient();
export const db = prisma;
