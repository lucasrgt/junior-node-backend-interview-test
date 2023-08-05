"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const launch_1 = require("../../../../application/controllers/launch");
/** Get all launches route setup */
exports.default = (router) => {
    router.get('/stats', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const findLaunchChartDataController = tsyringe_1.container.resolve(launch_1.FindChartDataController);
        const { body, statusCode } = yield findLaunchChartDataController.handle();
        res.status(statusCode).send(body);
    }));
};
