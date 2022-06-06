const router = require('express').Router();

const {Categorias} = require('../../database')

router.get('/', async (req, res) =>{
    const categorias = await Categorias.findAll();
    res.json(categorias);
})

router.get('/:idcategoria', async (req, res) =>{
    const categorias = await Categorias.findOne(req.params.idcategoria)
    res.json(categorias);
})

router.post('/', async (req, res) => {
    const categorias = await Categorias.create(req.body);
    res.json(categorias);
})

router.put('/:idcategoria', async (req, res) =>{
    await Categorias.update(req.body, {
        where: {id_categoria: req.params.idcategoria}
    });
    res.json({success: 'Se ha modificado'})
})

router.delete('/:idcategoria', async (req, res) => {
    await Categorias.destroy({
        where: {id_categoria: req.params.idcategoria}
    })
})

module.exports = router;