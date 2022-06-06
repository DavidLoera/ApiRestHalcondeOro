module.exports = (sequelize, type ) => {
    return sequelize.define('categorias' , {
        id_categoria:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombrecategoria: type.STRING,
        descripcion: type.STRING
        
    })
}