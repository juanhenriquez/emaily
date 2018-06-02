"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
// Models
const user_model_1 = require("./../mongodb/models/user/user.model");
class GoogleAuth {
    static getStrategy() {
        const configOpts = {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        };
        return new passport_google_oauth20_1.Strategy(configOpts, (accessToken, refreshToken, profile, cb) => {
            const { id, name, emails } = profile;
            user_model_1.User.findOrCreateWithGoogleAuth(id, {
                firstName: name.givenName,
                lastName: name.familyName,
                email: emails[0].value
            })
                .then((user) => cb(null, user))
                .catch(e => cb(e, null));
        });
    }
}
exports.GoogleAuth = GoogleAuth;
//# sourceMappingURL=google.js.map