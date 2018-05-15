import * as mongoose from 'mongoose';

export class MongoDBConnector {

  static mongooseInstance: mongoose.Mongoose;
  static connection: mongoose.Connection;

  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  connect(): Promise<mongoose.Mongoose> {
    return mongoose.connect(this.connectionString)
      .then((mongoose) => {
        MongoDBConnector.mongooseInstance = mongoose;
        MongoDBConnector.connection = mongoose.connection;
        return mongoose;
      });
  }
}