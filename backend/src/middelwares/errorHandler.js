import { ApiError } from "../utils/ApiError.js";
const errorHandler = (err, req, res, next) => {
    // Check if the error is an instance of ApiError
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
        });
    }

    // Handle other unexpected errors
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
    });
};

export { errorHandler };
