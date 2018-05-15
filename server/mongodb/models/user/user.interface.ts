import * as mongoose from 'mongoose';

export interface IUserModel extends mongoose.Document {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date,
}