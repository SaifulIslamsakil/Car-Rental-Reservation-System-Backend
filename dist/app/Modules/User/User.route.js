"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./User.controller");
const Route = express_1.default.Router();
Route.post("/create-user", User_controller_1.UserController.createUser);
Route.get("/", User_controller_1.UserController.getAllUser);
Route.get("/:userId", User_controller_1.UserController.getSingelUser);
Route.delete("/:userId", User_controller_1.UserController.deletedUser);
Route.patch("/:userId", User_controller_1.UserController.updatedUser);
exports.UserRoute = Route;
