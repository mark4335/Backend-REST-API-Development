"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const data_source_1 = require("../models/data-source");
const User_1 = require("../models/User");
const getUsers = async (_req, res) => {
    const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
    const users = await userRepo.find();
    res.json(users);
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
    const user = userRepo.create(req.body);
    await userRepo.save(user);
    res.status(201).json(user);
};
exports.createUser = createUser;
