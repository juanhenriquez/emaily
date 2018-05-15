import { MongoDBConnector } from './../../connector';
import { IUserModel } from './user.interface';
import { UserModelSchema } from './user.schema';

const mongoose = MongoDBConnector.mongooseInstance;

class UserModel {

  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: IUserModel) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static async getById(id: string) {
    const foundUser = await UserModelSchema.findById(id);
    const user = new UserModel(foundUser);
    return user;
  }

  static async createUser(data: IUserModel): Promise<IUserModel> {
    const newUser = new UserModelSchema(data);
    try {
      await newUser.save();
      return newUser;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
}

Object.seal(UserModel);

export const User = UserModel;