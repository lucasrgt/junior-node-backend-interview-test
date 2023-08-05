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
exports.MongoFindAllLaunchesRepository = void 0;
const mongo_helper_1 = require("../helpers/mongo-helper");
class MongoFindAllLaunchesRepository {
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name: searchName, details: searchDetails, limit = 5, page = 1 } = params;
            const query = {};
            if (searchName)
                query.name = { $regex: searchName, $options: 'i' };
            if (searchDetails)
                query.details = { $regex: searchDetails, $options: 'i' };
            const launchesCollection = mongo_helper_1.MongoHelper.getCollection('launches');
            const launches = yield launchesCollection
                .find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray();
            const totalDocs = yield launchesCollection.countDocuments(query);
            const totalPages = Math.ceil(totalDocs / limit);
            return {
                results: launches.map(mongo_helper_1.MongoHelper.map),
                totalDocs,
                page,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1
            };
        });
    }
}
exports.MongoFindAllLaunchesRepository = MongoFindAllLaunchesRepository;
