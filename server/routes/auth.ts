import { Router } from 'express';
import * as passport from 'passport';

import { Authentication } from './../authentication/auth';
import { GoogleAuth } from './../authentication/google';


const authRouter = Router();
const googleStrategy = GoogleAuth.getStrategy();

// Configure passport
passport.serializeUser(Authentication.serialize);
passport.deserializeUser(Authentication.deserialize);

passport.use(googleStrategy);

// Google auth routes.
authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res, next) => {
    res.redirect('/');
  }
);

export default authRouter;