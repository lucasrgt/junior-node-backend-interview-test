"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const mongo_add_launch_repository_impl_1 = require("../../infra/database/mongodb/repositories/mongo-add-launch-repository-impl");
const mongo_find_all_launches_repository_1 = require("../../infra/database/mongodb/repositories/mongo-find-all-launches-repository");
const mongo_find_chart_data_repository_impl_1 = require("../../infra/database/mongodb/repositories/mongo-find-chart-data-repository-impl");
const mongo_find_results_repository_impl_1 = require("../../infra/database/mongodb/repositories/mongo-find-results-repository-impl");
/** Set up the Dependency Injection container and registers all needed singletons */
exports.default = () => {
    _registerLaunch();
};
const _registerLaunch = () => {
    tsyringe_1.container.registerSingleton('FindAllLaunchesRepository', mongo_find_all_launches_repository_1.MongoFindAllLaunchesRepository);
    tsyringe_1.container.registerSingleton('AddLaunchRepository', mongo_add_launch_repository_impl_1.MongoAddLaunchRepository);
    tsyringe_1.container.registerSingleton('FindChartDataRepository', mongo_find_chart_data_repository_impl_1.MongoFindChartDataRepository);
    tsyringe_1.container.registerSingleton('FindResultsRepository', mongo_find_results_repository_impl_1.MongoFindResultsRepository);
};
