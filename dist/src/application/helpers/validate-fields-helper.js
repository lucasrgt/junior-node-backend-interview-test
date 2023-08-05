"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
/** Valida os parâmetros requeridos para a criação de um objeto no sistema */
const validateFields = (httpRequest, requiredFields) => {
    var _a;
    for (const field of requiredFields) {
        const requestFields = (_a = httpRequest.body) === null || _a === void 0 ? void 0 : _a[field];
        if (requestFields === undefined ||
            requestFields === null ||
            requestFields === '') {
            return { isValid: false, missingField: field };
        }
    }
    return { isValid: true };
};
exports.validateFields = validateFields;
