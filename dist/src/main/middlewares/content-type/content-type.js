"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentType = void 0;
/** Setup ContentType middleware */
const contentType = (req, res, next) => {
    res.type('json');
    next();
};
exports.contentType = contentType;
