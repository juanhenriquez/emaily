"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongoDBConnector {
    constructor(connectionString) {
        this.connectionString = connectionString;
    }
    connect() {
        return mongoose.connect(this.connectionString)
            .then((mongoose) => {
            MongoDBConnector.mongooseInstance = mongoose;
            MongoDBConnector.connection = mongoose.connection;
            return mongoose;
        });
    }
}
exports.MongoDBConnector = MongoDBConnector;
//# sourceMappingURL=connector.js.map