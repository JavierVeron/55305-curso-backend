import passport from "passport";
import GitHubStrategy from "passport-github2";
import { userModel } from "../models/user.model.js";

const initializePassport = () => {
    passport.use("github", new GitHubStrategy({
        clientID:"Iv1.1d66ce51019fa173",
        clientSecret:"869c530f2b297d93c1822744628123486e5ae9e4",
        callbackURL:"http://localhost:8080/api/sessions/githubcallback"
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile);
            let user = await userModel.findOne({email:profile._json.email});

            if (user) {
                return done(null, user);
            } else {
                let newUser = {
                    first_name:profile._json.name,
                    last_name:"",
                    email:profile._json.email,
                    age:100,
                    password:""
                }

                let result = await userModel.create(newUser);

                return done(null, result);
            }
        } catch(error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById(id);
        done(null, user);
    });
};

export default initializePassport;