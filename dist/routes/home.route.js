"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const home = (0, express_1.Router)();
home.get('/', home_controller_1.homeFunction);
exports.default = home;
