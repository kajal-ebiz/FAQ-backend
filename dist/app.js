"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const models_1 = __importDefault(require("./models"));
const faq_route_1 = __importDefault(require("./routes/faq.route"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
(0, models_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(faq_route_1.default);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
