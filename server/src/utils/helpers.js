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
