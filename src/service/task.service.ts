import { TaskDto } from "../dto/task.dto";
import { logger } from "../utils/default.logger";
import taskRepository from "../repository/task.repository";

const _newTask = async (taskDto: TaskDto) => {
  logger.info("taskService - _newTask");

  const createdTask = taskRepository.addTask(taskDto);
  logger.info("taskService - addTask", createdTask);

  return createdTask;
};

const _getAllTasks = async () => {
  logger.info("taskService - _getAllTasks");

  const tasks = await taskRepository.getAllTasks();

  return tasks;
};

const _deleteTask = async (id: string) => {
  logger.info("taskService - _deleteTask");

  await taskRepository.deleteTask(id);
};

export default {
  newTask: _newTask,
  getAllTasks: _getAllTasks,
  deleteTask: _deleteTask,
};
