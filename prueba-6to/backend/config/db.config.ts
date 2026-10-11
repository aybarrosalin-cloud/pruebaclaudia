import "dotenv/config";
import { DataSource } from "typeorm";
import User from "../user/model/user.model.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.DBPORT),
  password: process.env.PGPASSWORD,
  username: process.env.PGUSER,
  database: process.env.PGDATABASE,
  synchronize: true,
  entities: [User],
});
