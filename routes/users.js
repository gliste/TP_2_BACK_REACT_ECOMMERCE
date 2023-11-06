import { Router } from "express";
const router = Router();
import { getAllUsers } from "../controllers/users.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.json(await getAllUsers());
});

export default router;
