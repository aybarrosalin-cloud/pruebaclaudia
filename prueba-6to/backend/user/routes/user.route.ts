import express from "express";
import userController from "../controller/user.controller.js";

const userRoutes = express.Router();

userRoutes.get("/", userController.getUsers);
userRoutes.post("/", userController.saveUsers);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
