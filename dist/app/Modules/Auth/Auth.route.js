"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const Auth_controller_1 = require("./Auth.controller");
const Route = express_1.default.Router();
Route.post("/create-user", Auth_controller_1.UserController.createUser);
Route.get("/", Auth_controller_1.UserController.getAllUser);
Route.get("/:userId", Auth_controller_1.UserController.getSingelUser);
Route.delete("/:userId", Auth_controller_1.UserController.deletedUser);
Route.patch("/:userId", Auth_controller_1.UserController.updatedUser);
exports.UserRoute = Route;
