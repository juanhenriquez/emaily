"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const apollo_server_express_1 = require("apollo-server-express");
const connector_1 = require("./mongodb/connector");
const schema_1 = require("./mongodb/schema");
// routes
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.server = express();
        this.setup();
    }
    setup() {
        const mongodbConnectionString = process.env.MONGODB_URI;
        const db = new connector_1.MongoDBConnector(mongodbConnectionString);
        db.connect()
            .then(() => console.log('Connected to MongoDB'));
        this.server.use(cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [process.env.COOKIE_SECRET],
        }));
        this.server.use(passport.initialize());
        this.server.use(passport.session());
        this.server.use(routes_1.default);
        this.server.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress((req, res) => {
            return {
                schema: schema_1.schema,
                context: {
                    req,
                    res,
                    viewer: req.user,
                    mongo: schema_1.publicContext,
                }
            };
        }));
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