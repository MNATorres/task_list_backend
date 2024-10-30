import { Router } from "express";
import { createTask, getTasks } from "../controller/task.controller";

const router = Router()

router.post('/newTask', createTask)
router.get('/allTask', getTasks)

export default router