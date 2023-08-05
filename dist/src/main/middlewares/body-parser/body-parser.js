"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyParser = void 0;
const express_1 = require("express");
/** Setup JSON BodyParser middleware */
exports.bodyParser = (0, express_1.json)();
