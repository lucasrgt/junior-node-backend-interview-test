"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.ok = exports.serverError = exports.badRequest = void 0;
const badRequest = (message) => ({
    statusCode: 400,
    body: { message: message }
});
exports.badRequest = badRequest;
const serverError = () => ({
    statusCode: 500,
    body: {
        message: 'Ops! Ocorreu algum erro do nosso lado. Poderia tentar novamente em alguns instantes?'
    }
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: 200,
    body: data
});
exports.ok = ok;
const noContent = () => ({
    statusCode: 204,
    body: null
});
exports.noContent = noContent;
