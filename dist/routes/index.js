"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("./auth");
const rootRouter = express_1.Router();
rootRouter.use('/auth', auth_1.default);
exports.default = rootRouter;
//# sourceMappingURL=index.js.map