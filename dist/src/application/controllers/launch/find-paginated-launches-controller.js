"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.FindPaginatedLaunchesController = void 0;
const http_helper_1 = require("../../helpers/http-helper");
const tsyringe_1 = require("tsyringe");
/** Retorna um documento paginado com todas as launches*/
let FindPaginatedLaunchesController = exports.FindPaginatedLaunchesController = class FindPaginatedLaunchesController {
    constructor(findAllLaunchesRepository) {
        this.findAllLaunchesRepository = findAllLaunchesRepository;
    }
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = request.query || {};
                const { limit, page, search } = query;
                console.log('chegou aqui 1');
                const paginatedLaunches = yield this.findAllLaunchesRepository.findAll({
                    search,
                    limit,
                    page
                });
                console.log('chegou aqui 2');
                if (!paginatedLaunches) {
                    return (0, http_helper_1.badRequest)('Nenhum lançamento encontrado.');
                }
                return (0, http_helper_1.ok)(paginatedLaunches);
            }
            catch (error) {
                return (0, http_helper_1.serverError)();
            }
        });
    }
};
exports.FindPaginatedLaunchesController = FindPaginatedLaunchesController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('FindAllLaunchesRepository')),
    __metadata("design:paramtypes", [Object])
], FindPaginatedLaunchesController);
