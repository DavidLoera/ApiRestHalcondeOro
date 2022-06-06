const Sequelize = require('sequelize');

const ProductoModel = require('./models/products');
const CategoriasModel = require('./models/categorias')


const sequelize = new Sequelize('CPInTAB63t', 'CPInTAB63t', 'otONZhNfpH',{
    host: 'remotemysql.com',
    dialect: 'mysql'
})

const Producto = ProductoModel(sequelize, Sequelize);
const Categorias = CategoriasModel(sequelize, Sequelize);

//Llaves Foraneas   
Producto.belongsTo(Categorias,
    {
        foreignKey:{
            name: 'id_categoria',
            allowNull: false
        },
        onDelete: 'CASCADE'
    });

sequelize.sync({force: false}).then(() =>{
    console.log('Tablas sincronizadas')
})

module.exports = {
    Producto,
    Categorias,
    sequelize
}