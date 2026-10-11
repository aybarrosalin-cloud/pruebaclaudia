import { Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import userService from "../service/user.service.js";
import { UserDto, UserResponseDto } from "../dto/user.dto.js";

// Valida el body y devuelve el primer error (si hay)
async function validar(body: object, parcial = false) {
  const dto = plainToInstance(UserDto, body ?? {});
  const errors = await validate(dto, {
    whitelist: true,
    forbidNonWhitelisted: true,
    skipMissingProperties: parcial,
  });
  const mensajes = errors.flatMap((e) => Object.values(e.constraints ?? {}));
  return { dto, mensaje: mensajes[0] };
}
// Muestra solo los campos del UserResponseDto
function mostrar(data: unknown) {
  return plainToInstance(UserResponseDto, data, { excludeExtraneousValues: true });
}

class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await userService.findByAll();
    return res.status(200).json({ success: true, data: mostrar(users) });
  }

  async saveUsers(req: Request, res: Response) {
    const { dto, mensaje } = await validar(req.body);
    if (mensaje) {
      return res.status(400).json({ success: false, message: mensaje });
    }
    const user = await userService.save(dto);
    return res.status(201).json({ success: true, data: mostrar(user) });
  }

  async updateUser(req: Request, res: Response) {
    const id = req.params.id as string;
    const { dto, mensaje } = await validar(req.body, true);
    if (mensaje) {
      return res.status(400).json({ success: false, message: mensaje });
    }
    const user = await userService.update(id, dto);
    return res.status(200).json({ success: true, data: mostrar(user) });
  }

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id as string;
    const user = await userService.delete(id);
    return res.status(200).json({ success: true, data: user });
  }
}

export default new UserController();
