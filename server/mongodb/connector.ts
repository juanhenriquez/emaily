import * as mongoose from 'mongoose';

export class MongoDBConnector {

  static mongooseInstance: mongoose.Mongoose;
  static connection: mongoose.Connection;

  constructor() { }

  connect(): Promise<mongoose.Mongoose> {
    return mongoose.connect('mongodb://localhost:27017/emaily')
      .then((mongoose) => {
        MongoDBConnector.mongooseInstance = mongoose;
        MongoDBConnector.connection = mongoose.connection;
        return mongoose;
      });
  }
}