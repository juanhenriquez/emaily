import * as mongoose from 'mongoose';
import { MongoDBConnector } from './../../connector';
import { IUserModel } from './user.interface';

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const UserModelSchema = mongoose.model<IUserModel>('user', schema);