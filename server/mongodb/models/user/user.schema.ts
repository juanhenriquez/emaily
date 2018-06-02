import * as mongoose from 'mongoose';
import { MongoDBConnector } from './../../connector';
import { IUserModel } from './user.interface';

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  googleId: String,
}, { timestamps: true });

export const UserModelSchema = mongoose.model<IUserModel>('user', schema);