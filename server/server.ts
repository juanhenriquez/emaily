import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// DB
import { MongoDBConnector } from './mongodb/connector';

import { schema, publicContext as mongodbContext } from './mongodb/schema';

export class Server {

  private port: number;
  public server: express.Application;

  constructor() {
    this.server = express();
    this.setup();
  }

  setup() {
    const db = new MongoDBConnector();

    db.connect()
      .then(() => console.log('Connected to MongoDB'));

    // The GraphQL endpoint
    this.server.use(
      '/graphql',
      bodyParser.json(),
      graphqlExpress({
        schema,
        context: {
          ...mongodbContext
        }
      })
    );

    // GraphiQL, a visual editor for queries
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