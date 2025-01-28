class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
      // Call the parent Error class constructor with the message
      super(message);
  
      // Custom properties
      this.statusCode = statusCode; // HTTP status code
      this.message = message; // Error message
      this.errors = errors; // Additional error details (optional)
      this.success = false; // Indicate this is an error response
  
      // Add stack trace if provided; otherwise, capture it automatically
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { ApiError };
  