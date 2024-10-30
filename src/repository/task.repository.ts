import { TaskDto } from "../dto/task.dto";
import { logger } from "../utils/default.logger";

const tasks: Array<{ id: string; title: string; description: string }> = [];

const _addTask = (taskDto: TaskDto) => {
  logger.info("taskRepository - addTask");

  const newTask = {
    id: taskDto.id,
    title: taskDto.title,
    description: taskDto.description,
    createAt: taskDto.createAt
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
