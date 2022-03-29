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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFAQ = void 0;
const sequelize_1 = require("sequelize");
const faq_repository_1 = require("../repositories/faq.repository");
const generalResponse_helper_1 = __importDefault(require("../helper/generalResponse.helper"));
const getAllFAQ = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryString = req.query.filter;
        let getAllData;
        if (queryString) {
            getAllData = {
                where: {
                    question: { [sequelize_1.Op.like]: `%${queryString}%` },
                },
            };
        }
        const data = yield (0, faq_repository_1.getAll)(getAllData);
        return (0, generalResponse_helper_1.default)(res, data);
    }
    catch (error) {
        return (0, generalResponse_helper_1.default)(res, error, '', 'error', false, 400);
    }
});
exports.getAllFAQ = getAllFAQ;
