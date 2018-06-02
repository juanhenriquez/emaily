"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    googleId: String,
}, { timestamps: true });
exports.UserModelSchema = mongoose.model('user', schema);
//# sourceMappingURL=user.schema.js.map