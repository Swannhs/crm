import { ValidationError } from "./errors.js";
export function parsePositiveInteger(value, fieldName) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed <= 0 || !Number.isInteger(parsed)) {
        throw new ValidationError(`${fieldName} must be a positive integer.`, { fieldName, value });
    }
    return parsed;
}
export function parseOptionalInteger(value, fieldName) {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || !Number.isInteger(parsed) || parsed < 0) {
        throw new ValidationError(`${fieldName} must be a non-negative integer.`, { fieldName, value });
    }
    return parsed;
}
export function requireString(value, fieldName) {
    if (typeof value !== "string" || value.trim() === "") {
        throw new ValidationError(`${fieldName} is required.`, { fieldName });
    }
    return value.trim();
}
export function optionalString(value) {
    if (typeof value !== "string") {
        return undefined;
    }
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
}
export function parsePagination(page, limit) {
    const safePage = parseOptionalInteger(page, "page") ?? 1;
    const safeLimit = Math.min(parseOptionalInteger(limit, "limit") ?? 20, 100);
    return {
        page: safePage,
        limit: safeLimit,
        skip: (safePage - 1) * safeLimit,
    };
}
