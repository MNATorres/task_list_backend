import { Request, Response, NextFunction } from "express";
import { ApiError } from "../shared/response/apierror";
import { logger } from "../utils/default.logger";

/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param e Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */
const errorHandler = (
  e: ApiError | TypeError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let apiError = {};

  logger.error("ErrorHandler >", e);

  if (e instanceof Object) {
    apiError = new ApiError("An error has ocurred", 400, e);
  }

  if (e instanceof ApiError) {
    apiError = e;
  }

  if (e instanceof TypeError || e instanceof Error) {
    apiError = new ApiError(e.message);
  }

  res.status((apiError as ApiError).status).send(apiError);
};

export default errorHandler;
