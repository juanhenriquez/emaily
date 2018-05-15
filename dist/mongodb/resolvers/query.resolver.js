"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = {
    getUser(parent, { id }, context) {
        return context.Mongo.User.findById(id);
    }
};
//# sourceMappingURL=query.resolver.js.map