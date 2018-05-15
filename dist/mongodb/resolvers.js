"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
// resolvers
const user_resolver_1 = require("./models/user/user.resolver");
exports.resolvers = lodash_1.merge(user_resolver_1.resolvers);
exports.mutations = lodash_1.merge(user_resolver_1.mutations);
//# sourceMappingURL=resolvers.js.map