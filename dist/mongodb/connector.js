"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongoDBConnector {
    constructor() { }
    connect() {
        return mongoose.connect('mongodb://localhost:27017/emaily')
            .then((mongoose) => {
            MongoDBConnector.mongooseInstance = mongoose;
            MongoDBConnector.connection = mongoose.connection;
            return mongoose;
        });
    }
}
exports.MongoDBConnector = MongoDBConnector;
//# sourceMappingURL=connector.js.map