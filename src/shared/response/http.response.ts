import { Response } from "express";
import { ApiResponse } from "./apiresponse";
import { ApiError } from "./apierror";
import { HttpStatus } from "./http.status";

const OK = (res: Response, data?: any): Response => {
  return res
    .status(HttpStatus.OK)
    .json(new ApiResponse("Success", HttpStatus.OK, data));
};

const NoContent = (res: Response): Response => {
  return res.sendStatus(HttpStatus.NO_CONTENT);
};

const BadRequest = (data?: any): void => {
  throw new ApiError(
    "La solicitud enviada al servidor es incorrecta",
    HttpStatus.BAD_REQUEST,
    data,
  );
};

const NotFound = (data?: any): void => {
  throw new ApiError(
    "El recurso especificado no ha sido encontrado",
    HttpStatus.NOT_FOUND,
    data,
  );
};

const UnAuthorized = (data?: any): void => {
  throw new ApiError("Desautorizado", HttpStatus.UNAUTHORIZED, data);
};

const Forbidden = (data?: any): void => {
  throw new ApiError(
    "No posee suficientes permisos",
    HttpStatus.FORBIDDEN,
    data,
  );
};

const BusinessError = (data?: any): void => {
  throw new ApiError("Error de negocio", HttpStatus.BUSINESS_ERROR, data);
};

const Error = (message: string, data?: any): void => {
  throw new ApiError(message, HttpStatus.INTERNAL_SERVER_ERROR, data);
};

export default {
  OK,
  NoContent,
  BadRequest,
  BusinessError,
  NotFound,
  UnAuthorized,
  Forbidden,
  Error,
};
