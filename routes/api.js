const router = require('express').Router();

const apiProducto  = require('./api/ProductoRoute');
const apiCategoria = require('./api/CategoriaRoute');
 
router.use('/productos', apiProducto);
router.use('/categorias', apiCategoria);

module.exports = router;