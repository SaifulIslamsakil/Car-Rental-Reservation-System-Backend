"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const Auth_controller_1 = require("./Auth.controller");
const ValidationRequest_1 = __importDefault(require("../../Midleware/ValidationRequest"));
const Auth_validation_1 = require("./Auth.validation");
const Route = express_1.default.Router();
Route.post("/signup", (0, ValidationRequest_1.default)(Auth_validation_1.userValidation.userValidationSchema), Auth_controller_1.UserController.createUser);
Route.post("/signin", (0, ValidationRequest_1.default)(Auth_validation_1.userValidation.loginUserValidationSchema), Auth_controller_1.UserController.loginUser);
Route.get("/", Auth_controller_1.UserController.getAllUser);
Route.get("/:userId", Auth_controller_1.UserController.getSingelUser);
Route.delete("/:userId", Auth_controller_1.UserController.deletedUser);
Route.patch("/:userId", Auth_controller_1.UserController.updatedUser);
exports.UserRoute = Route;
