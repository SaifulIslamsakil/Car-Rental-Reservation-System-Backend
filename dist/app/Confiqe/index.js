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
    Node_Env: process.env.NODE_ENV,
    Database_Url: process.env.DATABASE_URL,
    Salt_Rounds: process.env.SALT_ROUNDS,
    Access_Secret: process.env.ACCESS_TOKEN,
    Refaresh_Secret: process.env.REFRESH_TOKEN,
    Accress_Expires: process.env.ACCRESS_EXPTRES,
    Refaresh_Expires: process.env.REFARESH_EXPTRES
};
