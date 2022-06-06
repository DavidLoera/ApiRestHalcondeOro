const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {Usuarios} = require('../../database');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail()
] ,async (req, res) =>{

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(422).json({err: errores.array()})
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const usuario = await Usuarios.create(req.body);
    res.json(usuario);
});


router.post('/signin', async (req, res) =>{
    const usuario = await Usuarios.findOne({ where: {email: req.body.email}});
    if(usuario){
        const same = bcrypt.compareSync(req.body.password, usuario.password);
        if(same){
        res.json({ sucess: createToken(usuario)})
        }else{
        res.json({err: 'Error en usuario y/o contreaseña'})
        }
    }else{
        res.json({err: 'Error en usuario y/o contreaseña'})
    }
})

const createToken = (Usuarios) =>{
    const payload ={
        usuarioId: Usuarios.id_usuario,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'SDPFE5KjaV');
}

module.exports = router;