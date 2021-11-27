import { Router } from "express";

import {
  renderTasks,
  addTasks,
  renderTaskEdit,
  updateTasks,
  deleteTask,
  done,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", addTasks);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", updateTasks);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", done);

export default router;
