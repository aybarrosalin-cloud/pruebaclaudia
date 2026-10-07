import { AppDataSource } from "../../config/db.config.js";
import User from "../model/user.model.js";

class userService {
  getRepository() {
    return AppDataSource.getRepository(User);
  }

  async save(data) {
    const repository = this.getRepository();
    const user = await repository.save(data);
    return user;
  }

  async update(id, data) {
    const repository = this.getRepository();
    const updatedUser = await repository.update(id, data);
    return updatedUser;
  }

  async findByAll() {
    const repository = this.getRepository();
    const users = await repository.find();
    return users;
  }

  async delete(id) {
    const repository = this.getRepository();
    const deletedUser = await repository.delete(id);
    return deletedUser;
  }
}

export default new userService();
