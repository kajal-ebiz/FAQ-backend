"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeFunction = void 0;
const homeFunction = (req, res) => {
    try {
        res.send('success');
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.homeFunction = homeFunction;
