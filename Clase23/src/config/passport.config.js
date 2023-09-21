import passport from "passport";
import jwt from "passport-jwt";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use("jwt", new JWTStrategy({
        jwtFromRequest:ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey:"S3CR3T0"
    }, async(jwt_payload, done) => {
        try {
            return done(null, jwt_payload);
        } catch (error) {
            return done(error);
        }
    }))
};

const cookieExtractor = (req) => {
    let token = null;

    if (req && req.cookies) {
        token = req.cookies["coderCookieToken"]
    }

    return token;
}

export const authorization = (role) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).send({status:"error", message:"Unauthorizated"});
        }

        if (req.user.role != role) {
            return res.status(403).send({status:"error", message:"No permissions"});
        }

        next();
    }
}

export default initializePassport;