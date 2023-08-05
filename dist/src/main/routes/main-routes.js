"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    /**
     * Returns the default success message for SpaceX API challenge
     */
    const defaultMessage = {
        message: 'Fullstack Challenge 🏅 - Space X API'
    };
    router.get('/', (req, res) => res.send(defaultMessage));
};
