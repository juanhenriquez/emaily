"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    getUser(parent, { id }, context) {
        return context.User.getById(id);
    }
};
exports.mutations = {
    createUser(parent, data, context) {
        return context.User.createUser(data);
    }
};
//# sourceMappingURL=user.resolver.js.map