"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const setup_db_1 = __importDefault(require("./config/setup-db"));
const port = process.env.SERVER_PORT || 5000;
(0, setup_db_1.default)().then(() => {
    app_1.default.listen(port, () => console.log(`Server running at http://localhost:${port}`));
});
