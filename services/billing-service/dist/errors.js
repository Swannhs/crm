export class AppError extends Error {
    statusCode;
    code;
    details;
    constructor(message, statusCode, code, details) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.name = "AppError";
    }
}
export class ValidationError extends AppError {
    constructor(message, details) {
        super(message, 422, "VALIDATION_ERROR", details);
    }
}
export class NotFoundError extends AppError {
    constructor(message, details) {
        super(message, 404, "NOT_FOUND", details);
    }
}
export class UnauthorizedError extends AppError {
    constructor(message = "Missing identity context headers.") {
        super(message, 401, "UNAUTHORIZED");
    }
}
