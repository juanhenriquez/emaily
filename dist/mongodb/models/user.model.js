"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = require("./../connector");
const user_schema_1 = require("./schemas/user.schema");
const mongoose = connector_1.MongoDBConnector.mongooseInstance;
class UserModel {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield user_schema_1.UserModelSchema.findById(id);
            const user = new UserModel(foundUser);
            return user;
        });
    }
    static createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_schema_1.UserModelSchema(data);
            try {
                yield newUser.save();
                return newUser;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
}
Object.seal(UserModel);
exports.User = UserModel;
//# sourceMappingURL=user.model.js.map