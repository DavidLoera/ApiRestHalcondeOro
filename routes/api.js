const router = require('express').Router();

const Middelware = require('./middlewares')
const apiProducto  = require('./api/ProductoRoute');
const apiCategoria = require('./api/CategoriaRoute');
const apiUsuario   = require('./api/UsuariosRoute')
 
router.use('/productos', Middelware.checkToken ,apiProducto);
router.use('/categorias', Middelware.checkToken ,apiCategoria);
router.use('/usuarios', apiUsuario);

module.exports = router;