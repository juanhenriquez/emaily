"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = {
    createUser(parent, data, context) {
        return context.Mongo.User.createUser(data);
    }
};
//# sourceMappingURL=mutations.resolver.js.map