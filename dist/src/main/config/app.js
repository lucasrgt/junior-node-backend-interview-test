"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const setup_middlewares_1 = __importDefault(require("./setup-middlewares"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const di_container_1 = __importDefault(require("../dependency-injection/di-container"));
/** Server initial setup. All configuration functions must be called here.*/
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, setup_middlewares_1.default)(app);
(0, di_container_1.default)();
(0, routes_1.default)(app);
exports.default = app;
