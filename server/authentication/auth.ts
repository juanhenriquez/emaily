// interfaces
import { IUserModel } from '../mongodb/models/user/user.interface';

// models
import { User } from './..//mongodb/models/user/user.model';

export class Authentication {
  static serialize(user: IUserModel, cb) {
    cb(null, user.id);
  }

  static deserialize(userId: string, cb) {
    User.getById(userId)
      .then(user => cb(null, user))
      .catch(err => cb(err, null));
  }
}
