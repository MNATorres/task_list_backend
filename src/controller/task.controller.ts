import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import { TaskDto } from "../dto/task.dto";
import asyncHandler from "express-async-handler";
import taskService from "./../service/task.service";
import { logger } from "../utils/default.logger";

export const createTask = asyncHandler(async (req: Request, res: Response) => {
  logger.info("taskController - createTask");

  const dto = plainToInstance(TaskDto, req.body);
  logger.info("taskController - TaskDto", dto);

  await validateOrReject(dto, {
    groups: ["newTask"],
    whitelist: true,
    forbidNonWhitelisted: true,
    validationError: { target: false },
  });

  const data = await taskService.newTask(dto);

  res.json(data);
});

export const getTasks = asyncHandler(async (req: Request, res: Response) => {
  logger.info("taskController - getTasks");

  const tasks = await taskService.getAllTasks();
  logger.info("taskController - tasks", tasks);

  res.status(200).json(tasks);
});
