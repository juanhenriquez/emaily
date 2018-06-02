"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const google_1 = require("./google");
exports.router = express_1.Router();
const googleAuth = new google_1.GoogleAuth();
exports.router.use('/', googleAuth.router);
//# sourceMappingURL=index.js.map