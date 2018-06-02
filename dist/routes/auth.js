"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport = require("passport");
const auth_1 = require("./../authentication/auth");
const google_1 = require("./../authentication/google");
const authRouter = express_1.Router();
const googleStrategy = google_1.GoogleAuth.getStrategy();
// Configure passport
passport.serializeUser(auth_1.Authentication.serialize);
passport.deserializeUser(auth_1.Authentication.deserialize);
passport.use(googleStrategy);
// Google auth routes.
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google'), (req, res, next) => {
    res.redirect('/');
});
exports.default = authRouter;
//# sourceMappingURL=auth.js.map