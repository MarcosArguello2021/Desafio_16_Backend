import passport from '../utils/passport.js'
import {registro, desloguear} from '../services/userService.js';

export const signup = async (req, res) => {
    const { email, password } = req.body
    const registrar = await registro(email, password, req, res);
};

export const signin = passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/api/error-login",
})

export const logout = async (req, res)=> {
    let idSession = req.session.passport.user;
    const cerrarSesion = await desloguear(idSession, req, res);
}
export const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/api/login');
    }
}