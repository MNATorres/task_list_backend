import { configure, getLogger } from "log4js";
import path from "path";

// Define la carpeta de logs
const LOG_DIR = path.join(__dirname, "./../../../../list_task/logs"); // Cambia esta ruta según tu estructura de carpetas
const LOG_FILE = "application.log"; // Nombre del archivo de log

// appenders
configure({
  appenders: {
    console: { type: "stdout", layout: { type: "colored" } },
    dateFile: {
      type: "dateFile",
      filename: path.join(LOG_DIR, LOG_FILE), // Usar la ruta definida
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
