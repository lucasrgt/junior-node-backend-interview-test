"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../middlewares");
/** Setup all middlewares of the API */
const setupMiddlewares = (app) => {
    app.use(middlewares_1.bodyParser);
    app.use(middlewares_1.cors);
    app.use(middlewares_1.contentType);
};
exports.default = setupMiddlewares;
