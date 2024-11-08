import { TaskDto } from "../dto/task.dto";
import { logger } from "../utils/default.logger";
import httpResponse from "../shared/response/http.response";
import { dbConnection } from "../database/database";

const _addTask = async (taskDto: TaskDto) => {
  logger.info("taskRepository - addTask");

  const newTask = {
    id: taskDto.id,
    title: taskDto.title,
    description: taskDto.description,
    createAt: taskDto.createAt,
    complete: taskDto.complete,
  };

  // Consulta SQL para insertar la nueva tarea
  const query = `
    INSERT INTO tasks (id, title, description, createAt, complete)
    VALUES (?, ?, ?, ?, ?)
  `;

  // Ejecutar la consulta sin manejar explícitamente el error
  await dbConnection.execute(query, [
    newTask.id,
    newTask.title,
    newTask.description,
    newTask.createAt,
    newTask.complete,
  ]);

  logger.info("taskRepository - newTask created", newTask);
  logger.info("taskRepository - newTask created", newTask);

  // Devolver el objeto de la nueva tarea
  return newTask;
};

const _getAllTasks = async () => {
  logger.info("taskRepository - _getAllTasks");
  try {
    const [rows] = await dbConnection.execute("SELECT * FROM tasks");

    logger.info("_getAllTasks", rows)
    return rows;
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    throw error;
  }
};

const _findTask = async (id: string) => {
  logger.info("taskRepository - _findTask");

  const [row] = await dbConnection.execute(
    `SELECT * FROM tasks WHERE id = ?`, [id],
  );
  logger.info("findTask", (row as any)[0]);

  return (row as any)[0];
};

const _deleteTask = async (id: string) => {
  logger.info("taskRepository - _deleteTask");

  const findTask = await _findTask(id)
  console.log("=====>findTask", findTask);
  
  if (!findTask) {
    throw httpResponse.NotFound(`Task with id ${id} not found`);
  }
  // Si la tarea existe, la eliminamos
  await dbConnection.execute(`DELETE FROM tasks WHERE id = ?`, [id]);

  logger.info(`Task with id ${id} has been deleted`);
};

export default {
  addTask: _addTask,
  getAllTasks: _getAllTasks,
  deleteTask: _deleteTask,
};
