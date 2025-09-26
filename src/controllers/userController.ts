import { Request, Response } from 'express';
import { AppDataSource } from '../models/data-source';
import { User } from '../models/User';

export const getUsers = async (_req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.find();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.create(req.body);
  await userRepo.save(user);
  res.status(201).json(user);
};
