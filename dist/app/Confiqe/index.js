"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confiqe = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config(({ path: path_1.default.join(process.cwd(), ".env") }));
exports.Confiqe = {
    Port: process.env.PORT,
    Database_Url: process.env.DATABASE_URL,
    Bycript: process.env.BYCRIPT,
    Access_Token: process.env.ACCESS_TOKEN,
    REFARWESH_TOKEN: process.env.REFARWESH_TOKEN,
};
