import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import statusCodes from '../statusCodes';
import UserService from '../services/user.service';

const secret: any = process.env.JWT_SECRET;

const JWT_CONFIG: any = {
  algorithm: 'HS256',
  expiresIn: '12d',
};

const createToken = (data: { username: string }) => jwt.sign({ data }, secret, JWT_CONFIG);

// const verifyToken = (token: any) => jwt.verify(token, secret);

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    const token = createToken(userCreated);
    res.status(statusCodes.CREATED).json({ token });
  };
}

export default UserController;