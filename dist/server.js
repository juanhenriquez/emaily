"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const apollo_server_express_1 = require("apollo-server-express");
// DB
const connector_1 = require("./mongodb/connector");
const schema_1 = require("./mongodb/schema");
class Server {
    constructor() {
        this.server = express();
        this.setup();
    }
    setup() {
        const db = new connector_1.MongoDBConnector();
        db.connect()
            .then(() => console.log('Connected to MongoDB'));
        // The GraphQL endpoint
        this.server.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({
            schema: schema_1.schema,
            context: Object.assign({}, schema_1.publicContext)
        }));
        // GraphiQL, a visual editor for queries
        this.server.use('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));
    }
    listen(port) {
        return new Promise((resolve, reject) => {
            this.server.listen(port, (err) => {
                if (err)
                    reject(err);
                resolve();
            });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map