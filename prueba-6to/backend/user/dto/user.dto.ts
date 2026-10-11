import { Expose } from "class-transformer";
import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Rol } from "../enum/rol.enum.js";

// Lo que RECIBE la API
export class UserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsInt()
  edad!: number;

  @IsEmail()
  email!: string;

  @IsEnum(Rol, { message: "role inválido. Valores permitidos: ADMIN, USER, GUEST" })
  role!: Rol;
}

// Lo que MUESTRA la API (sin "edad")
export class UserResponseDto {
  @Expose() name!: string;
  @Expose() email!: string;
  @Expose() role!: Rol;
}
