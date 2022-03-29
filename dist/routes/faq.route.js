"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faq_controller_1 = require("../controllers/faq.controller");
const FAQ = (0, express_1.Router)();
FAQ.get('/faq', faq_controller_1.getAllFAQ);
exports.default = FAQ;
