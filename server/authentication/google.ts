import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Models
import { User } from './../mongodb/models/user/user.model';
import { IUserModel } from '../mongodb/models/user/user.interface';

export class GoogleAuth {
  static getStrategy() {
    const configOpts = {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
    };

    return new GoogleStrategy(configOpts, (accessToken, refreshToken, profile, cb) => {
      const { id, name, emails } = profile;
      User.findOrCreateWithGoogleAuth(
        id,
        {
          firstName: name.givenName,
          lastName: name.familyName,
          email: emails[0].value
        }
      )
      .then((user: IUserModel) => cb(null, user))
      .catch(e => cb(e, null));
    });
  }
}
