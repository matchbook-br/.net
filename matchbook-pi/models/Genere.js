module.exports = (sequelize, DataTypes) =>{
    
    const Genere = sequelize.define(
        'Genere',{
            nameGeneres: DataTypes.STRING,
        }, {
            tableName: "generes",
            timestamps: false
        }
    );

    return Genere;

};