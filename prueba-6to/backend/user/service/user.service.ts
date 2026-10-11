import { AppDataSource } from "../../config/db.config.js";
import User from "../model/user.model.js";
import { UserDto } from "../dto/user.dto.js";

class UserService {
  getRepository() {
    return AppDataSource.getRepository(User);
  }

  async save(data: UserDto) {
    const repository = this.getRepository();
    return await repository.save(data);
  }

  async update(id: string, data: Partial<UserDto>) {
    const repository = this.getRepository();
    const user = await repository.findOneBy({ id: Number(id) });
    if (!user) throw new Error("Usuario no encontrado");
    repository.merge(user, data);
    return await repository.save(user);
  }

  async findByAll() {
    const repository = this.getRepository();
    return await repository.find({
      select: { id: true, name: true, edad: true, email: true, role: true },
    });
  }

  async delete(id: string) {
    const repository = this.getRepository();
    return await repository.delete(Number(id));
  }
}

export default new UserService();

