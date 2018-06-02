require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import * as cookieSession from 'cookie-session';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { MongoDBConnector } from './mongodb/connector';
import { schema, publicContext as mongodbContext } from './mongodb/schema';

// routes
import router from './routes';

export class Server {

  private port: number;
  public server: express.Application;

  constructor() {
    this.server = express();
    this.setup();
  }

  setup() {
    const mongodbConnectionString = process.env.MONGODB_URI;
    const db = new MongoDBConnector(mongodbConnectionString);

    db.connect()
      .then(() => console.log('Connected to MongoDB'));

    this.server.use(cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_SECRET],
    }));

    this.server.use(passport.initialize());
    this.server.use(passport.session());

    this.server.use(router);

    this.server.use(
      '/graphql',
      bodyParser.json(),
      graphqlExpress((req, res) => {
        return {
          schema,
          context: {
            req,
            res,
            viewer: req.user,
            mongo: mongodbContext,
          }
        }
      })
    );

    this.server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  }

  listen(port) {
    return new Promise((resolve, reject) => {
      this.server.listen(port, (err) => {
        if (err) reject(err);
        resolve();
      })
    });
  }

}