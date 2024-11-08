import { configure, getLogger } from "log4js";
import path from "path";
import config from "./../config/config.keys";

// Define la carpeta de logs
const LOG_DIR = path.join(__dirname, config.LOG_DIR || "./../");

// appenders
configure({
  appenders: {
    console: { type: "stdout", layout: { type: "colored" } },
    dateFile: {
      type: "dateFile",
      filename: path.join(LOG_DIR, config.LOG_FILE || "orapplication.log"), // Usar la ruta definida
      layout: { type: "basic" },
      compress: true,
      numBackups: 7,
      keepFileExt: true,
    },
  },
  categories: {
    default: { appenders: ["console", "dateFile"], level: "info" }, // Establecer el nivel de logging aquí
  },
});

// fetch logger and export
export const logger = getLogger();
