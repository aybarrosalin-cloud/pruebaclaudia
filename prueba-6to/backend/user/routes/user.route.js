// Donde estarán mis rutas del modulo usuarios

// Aquí se llama al controlador, SIEMPRE no al servicio.

import express from "express";

import userController from "../controller/user.controller.js";

const userRoutes = express.Router();

userRoutes.get("/users", userController.getUsers);

userRoutes.post("/user", userController.saveUsers);

userRoutes.put("/user/:id", userController.updateUser);

userRoutes.delete("/delete-user/:id", userController.deleteUser);

export default userRoutes;
