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
exports.MongoFindChartDataRepository = void 0;
const mongo_helper_1 = require("../helpers/mongo-helper");
class MongoFindChartDataRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const launchesCollection = mongo_helper_1.MongoHelper.getCollection('launches');
            const launches = yield launchesCollection.find({}).toArray();
            return launches.map(({ date_utc, cores, rocket }) => ({
                cores,
                date_utc,
                rocket
            }));
        });
    }
}
exports.MongoFindChartDataRepository = MongoFindChartDataRepository;
