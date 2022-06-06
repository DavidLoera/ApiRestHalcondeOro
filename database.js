const Sequelize = require('sequelize');
require("dotenv").config();

const ProductoModel   = require('./models/products');
const CategoriasModel = require('./models/categorias')
const UsuariosModel   = require('./models/usuarios')


const sequelize = new Sequelize(`${process.env.USER}`, `${process.env.DATABASE}`, `${process.env.PASS}`,{
    host: process.env.HOST,
    dialect: 'mysql'
})

const Producto = ProductoModel(sequelize, Sequelize);
const Categorias = CategoriasModel(sequelize, Sequelize);
const Usuarios = UsuariosModel(sequelize, Sequelize);

//Llaves Foraneas   
Producto.belongsTo(Categorias,
    {
        foreignKey:{
            name: 'id_categoria',
            allowNull: false
        },
        onDelete: 'CASCADE'
    });
  
Producto.belongsTo(Usuarios,
    {
        foreignKey:{
            name: 'id_usuario',
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
    Usuarios,
    sequelize
}