"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const ValidationRequest_1 = __importDefault(require("../../Midleware/ValidationRequest"));
const Auth_validation_1 = require("./Auth.validation");
const Auth_controller_1 = require("./Auth.controller");
const Route = express_1.default.Router();
Route.post("/signin", (0, ValidationRequest_1.default)(Auth_validation_1.AuthValidations.loginUserValidationSchema), Auth_controller_1.AuthController.loginUser);
exports.AuthRoute = Route;
