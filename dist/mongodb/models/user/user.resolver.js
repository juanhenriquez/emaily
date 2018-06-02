"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = {
    getUser(parent, { id }, _a) {
        var { viewer } = _a, context = __rest(_a, ["viewer"]);
        return context.mongo.User.getById(id, viewer);
    }
};
exports.mutations = {
    createUser(parent, data, context) {
        return context.mongo.User.createUser(data);
    },
    logout(parent, data, { req, mongo, viewer }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield mongo.User.getById(viewer.id);
            req.logout();
            return user;
        });
    }
};
//# sourceMappingURL=user.resolver.js.map