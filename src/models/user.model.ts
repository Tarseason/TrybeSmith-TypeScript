import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: Users): Promise<Users> {
    const { username, vocation, level, password } = user;
    const intoUser = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = intoUser;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}