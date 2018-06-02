"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models
const user_model_1 = require("./..//mongodb/models/user/user.model");
class Authentication {
    static serialize(user, cb) {
        cb(null, user.id);
    }
    static deserialize(userId, cb) {
        user_model_1.User.getById(userId)
            .then(user => cb(null, user))
            .catch(err => cb(err, null));
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=auth.js.map