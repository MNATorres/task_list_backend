import express, { Request, Response } from "express";
import cors from "cors";
import indexRoutes from "./route/index.route";
import errorHandler from "./middleware/errorhandler.mw";
import { logger } from "./utils/default.logger";
import config from "./config/config.keys";
import { dbConnection } from "./database/database";

const app = express();
const PORT = config.PORT || 3000;

app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, mundo desde TypeScript!");
});

app.use("/api/", indexRoutes);

app.use(errorHandler);

dbConnection
  .getConnection() 
  .then(() => {
    logger.info("Database connected");
    app.listen(config.PORT, () => {
      logger.info(`Server started at http://localhost:${config.PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Error connecting to the database:", error);
  });
