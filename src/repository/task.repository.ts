import { TaskDto } from "../dto/task.dto";
import { logger } from "../utils/default.logger";
import httpResponse from "../shared/response/http.response";

let tasks: TaskDto[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description for Task 1",
    createAt: "2024-11-07T10:00:00Z",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description for Task 2",
    createAt: "2024-11-07T11:00:00Z",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description for Task 3",
    createAt: "2024-11-07T12:00:00Z",
  },
  {
    id: "4",
    title: "Task 4",
    description: "Description for Task 4",
    createAt: "2024-11-07T13:00:00Z",
  },
];

const _addTask = (taskDto: TaskDto) => {
  logger.info("taskRepository - addTask");

  const newTask = {
    id: taskDto.id,
    title: taskDto.title,
    description: taskDto.description,
    createAt: taskDto.createAt,
  };

  tasks.push(newTask);
  logger.info("taskRepository - newTask", newTask);

  return newTask;
};

const _getAllTasks = () => {
  logger.info("taskRepository - _getAllTasks", tasks);
  return tasks;
};

const _deleteTask = (id: string) => {
  logger.info("taskRepository - _deleteTask", tasks);

  const taskExists = tasks.some((task) => task.id === id);

  if (!taskExists) {
    throw httpResponse.NotFound(`Task with id ${id} not found`);
  }

  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
};

export default {
  addTask: _addTask,
  getAllTasks: _getAllTasks,
  deleteTask: _deleteTask,
};
