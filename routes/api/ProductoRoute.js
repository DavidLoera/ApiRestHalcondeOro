const router = require('express').Router();
const Sequelize = require('sequelize');
const {Producto, sequelize} = require('../../database')

router.get('/', async (req, res) =>{
    const usuarioId = req.usuarioId;
    console.log(usuarioId)
    const productos = await sequelize.query(
        'SELECT id_producto, nombreproducto, productos.descripcion, categorias.descripcion, precio, modelo, productos.id_usuario,nombrecategoria, productos.id_categoria, productos.createdAt, productos.updatedAt FROM productos, categorias, usuarios WHERE categorias.id_categoria = productos.id_categoria and productos.id_usuario = usuarios.id_usuario and productos.id_usuario ='+usuarioId, {
        model: Producto,
        mapToModel: true // pass true here if you have any mapped fields
      }); 
    res.json(productos);
})

router.post('/', async (req, res) => {
    const productos = await Producto.create(req.body);
    res.json(productos);
})

router.put('/:idproducto', async (req, res) =>{
    await Producto.update(req.body, {
        where: {id_producto: req.params.idproducto}
    });
    res.json({success: 'Se ha modificado'})
})

router.delete('/:idproducto', async (req,res) =>{
    await Producto.destroy({
        where: {id_producto: req.params.idproducto}
    });
    res.json({success: 'Se ha borrado el registro'})
})

module.exports = router;