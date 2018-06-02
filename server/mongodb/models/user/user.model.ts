import { IUserModel } from './user.interface';
import { UserModelSchema } from './user.schema';

class UserModel {

  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  googleId: string

  constructor(data: IUserModel) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.googleId = data.googleId;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static async getById(id: string, viewer = null) {
    console.log(viewer, id);
    if (!viewer || viewer.id === id) {
      const foundUser = await UserModelSchema.findById(id);
      const user = new UserModel(foundUser);
      return user;
    }

    throw new Error(`Can't access to the requested resource`);;
  }

  static async createUser(data: any): Promise<IUserModel> {
    const newUser = new UserModelSchema(data);
    try {
      await newUser.save();
      return newUser;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  static async findOrCreateWithGoogleAuth(googleId: string, data: { firstName: string, lastName: string, email: string }): Promise<any> {
    const foundUser = await UserModelSchema.findOne({ googleId });
    return foundUser ? new UserModel(foundUser) : await this.createUser({ googleId, ...data });
  }
}

Object.seal(UserModel);

export const User = UserModel;