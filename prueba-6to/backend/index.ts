import express, { Request, Response } from "express";
import userRoutes from "./user/routes/user.route.js";
import { AppDataSource } from "./config/db.config.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hola 6to!");
});

app.use("/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  })
  .catch((error) => console.log(error));