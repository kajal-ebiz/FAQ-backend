"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faq_1 = __importDefault(require("./faq"));
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';
const dbInit = () => Promise.all([faq_1.default.sync({ alter: isDev || isTest })]);
exports.default = dbInit;
