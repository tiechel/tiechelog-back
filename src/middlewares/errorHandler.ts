import { Handler, ErrorRequestHandler } from 'express';

export const notFound: Handler = (req, res, next) => {
  res.status(404);
  res.json({
    message: 'Not found.',
    path: `${req.method}:${req.path}`,
  });
};

export const serverError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || `Server error.`,
    error: err,
    path: `${req.method}:${req.path}`,
  });
};
