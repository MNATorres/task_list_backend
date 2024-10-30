import { v4 as uuidv4 } from "uuid";
import { TaskDto } from "../dto/task.dto";
import { logger } from "../utils/default.logger";

const tasks: Array<{ id: string; title: string; description: string }> = [];

const _addTask = (taskDto: TaskDto) => {
  logger.info("taskRepository - addTask");

  const newTask = {
    id: uuidv4(),
    title: taskDto.title,
    description: taskDto.description,
  };

  tasks.push(newTask);
  logger.info("taskRepository - newTask", newTask);

  return newTask;
};

const _getAllTasks = () => {
  logger.info("taskRepository - _getAllTasks", tasks);
  return tasks;
};

export default {
  addTask: _addTask,
  getAllTasks: _getAllTasks,
};
