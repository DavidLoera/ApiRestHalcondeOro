module.exports = (sequelize, type ) => {
    return sequelize.define('productos' , {
        id_producto:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreproducto: type.STRING,
        descripcion: type.STRING,
        precio: type.DOUBLE,
        modelo: type.STRING,
        id_categoria: type.INTEGER
    })
}