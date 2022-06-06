const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res,next) =>{

    if(!req.headers['user-token']){
        return res.json({err: 'No tienes permiso para entrar a este sitio', msg: 'Inicia sesión con tu cuenta para acceder a tus datos'})
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try{
        payload = jwt.decode(userToken, 'SDPFE5KjaV');
    }catch(err){
        return res.json({err: 'El token es incorrecto'})
    }
    
    if(payload.expiredAt < moment().unix()){
        return res.json({err: 'El token ha expirado'})
    }

    req.usuarioId = payload.usuarioId;

    next();
};

module.exports = {
    checkToken: checkToken
}

