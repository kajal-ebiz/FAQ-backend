"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalResponse = (response, data = [], message = '', response_type = 'success', toast = false, statusCode = 200) => {
    response.status(statusCode).send({
        data: data,
        message: message,
        toast: toast,
        response_type: response_type,
    });
};
exports.default = generalResponse;
