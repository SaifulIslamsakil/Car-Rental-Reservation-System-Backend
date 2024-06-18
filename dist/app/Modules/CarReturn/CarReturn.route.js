"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarReturnRoute = void 0;
const express_1 = __importDefault(require("express"));
const CarReturn_controller_1 = require("./CarReturn.controller");
const Route = express_1.default.Router();
Route.put("/return", CarReturn_controller_1.CarReturnController.CarReturn);
exports.CarReturnRoute = Route;
