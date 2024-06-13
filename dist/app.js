"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const NotFoundRoute_1 = __importDefault(require("./app/Midleware/NotFoundRoute"));
const GlobalErrorHandling_1 = __importDefault(require("./app/Midleware/GlobalErrorHandling"));
const Route_1 = __importDefault(require("./app/Route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// use Route
app.use("/api", Route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(GlobalErrorHandling_1.default);
app.use(NotFoundRoute_1.default);
exports.default = app;
