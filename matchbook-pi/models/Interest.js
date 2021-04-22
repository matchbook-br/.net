module.exports = (sequelize, DataTypes) =>{
    
    const Interest = sequelize.define(
        'Interest',{
            users_id: DataTypes.INTEGER,
            generes_id: DataTypes.INTEGER
        }, {
            tableName: "interest",
            timestamps: false
        }
    );

    return Interest;

};