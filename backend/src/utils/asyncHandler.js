const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next); // Pass `next` as a reference, not `next()`.
    };
};

export { asyncHandler };
