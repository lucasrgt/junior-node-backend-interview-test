"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_paginated_launches_route_1 = __importDefault(require("./find-paginated-launches-route"));
const add_launch_route_1 = __importDefault(require("./add-launch-route"));
const find_chart_data_route_1 = __importDefault(require("./stats/find-chart-data-route"));
const find_results_route_1 = __importDefault(require("./results/find-results-route"));
const express_1 = require("express");
/** Export all Launch routes */
exports.default = (router) => {
    const launchRouter = (0, express_1.Router)();
    (0, find_results_route_1.default)(launchRouter);
    (0, find_chart_data_route_1.default)(launchRouter);
    (0, find_paginated_launches_route_1.default)(launchRouter);
    (0, find_results_route_1.default)(launchRouter);
    (0, add_launch_route_1.default)(launchRouter);
    router.use('/launches', launchRouter);
};
