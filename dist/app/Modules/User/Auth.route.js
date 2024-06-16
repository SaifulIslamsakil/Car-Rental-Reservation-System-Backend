"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("./User.controller");
const ValidationRequest_1 = __importDefault(require("../../Midleware/ValidationRequest"));
const User_validation_1 = require("./User.validation");
const Route = express_1.default.Router();
Route.post("/signup", (0, ValidationRequest_1.default)(User_validation_1.userValidation.userValidationSchema), User_controller_1.UserController.createUser);
Route.post("/signin", (0, ValidationRequest_1.default)(User_validation_1.userValidation.loginUserValidationSchema), User_controller_1.UserController.loginUser);
Route.get("/", User_controller_1.UserController.getAllUser);
Route.get("/:userId", User_controller_1.UserController.getSingelUser);
Route.delete("/:userId", User_controller_1.UserController.deletedUser);
Route.patch("/:userId", User_controller_1.UserController.updatedUser);
Route.post('/refresh-token', 
// ValidationRequest(userValidation.refreshTokenValidationSchema),
User_controller_1.UserController.refreshToken);
exports.UserRoute = Route;
