import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Rol } from "../enum/rol.enum.js";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "int" })
  edad!: number;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "enum", enum: Rol })
  role!: Rol;
}
