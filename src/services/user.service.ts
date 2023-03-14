import connection from '../models/connection';
import UserModel from '../models/user.model';
import Users from '../interfaces/user.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: Users): Promise<Users> {
    return this.model.create(user);
  }
}

export default UserService;