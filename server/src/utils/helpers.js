export const sendResponse = (
  res,
  statusCode,
  message,
  data = null,
  error = null
) => {
  return res.status(statusCode).json({
    status: statusCode,
    message: message,
    data,
    error,
  });
};

export const validate = (schema, options = {}) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(
      // @ts-ignore
      options?.field ? req[options.field] : req.body,
      {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
        errors: {
          wrap: {
            label: '',
          },
        },
        ...options,
      }
    );

    if (error) {
      const errors = error.details.reduce(
        (prev, cur) => ({
          ...prev,
          [cur.context?.key || 'error']: cur.message,
        }),
        { error: null }
      );
      // @ts-ignore
      errors.error = error.message;
      console.error(errors);
      return sendResponse(res, 422, 'Validation error', null, errors);
    }

    req.body = value;
    next();
  };
};
