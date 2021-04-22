module.exports = (sequelize, DataTypes) =>{
    
    const Book = sequelize.define(
        'Book',{
            name:DataTypes.STRING,
            author: DataTypes.STRING,
            description: DataTypes.STRING,
            publisher: DataTypes.STRING,
            generes_id: DataTypes.INTEGER,
            users_id: DataTypes.INTEGER,
           // generes_id1: DataTypes.INTEGER, //pode estar errado no banco
           // users_id1: DataTypes.INTEGER    //pode estar errado no banco
        }, {
            tableName: "books",
            timestamps: false
        }
    );

    return Book;

};