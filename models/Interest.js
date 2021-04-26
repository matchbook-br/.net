module.exports = (sequelize, DataTypes) =>{
    
    const Interest = sequelize.define(
        'Interest',{
            users_id: DataTypes.INTEGER,
            generes_id: DataTypes.INTEGER
        }, {
            tableName: "interests",
            timestamps: false
        }
    );

    Interest.associate = (models) => {
        Interest.belongsTo(models.Genere, { as: "genere", foreignKey: "generes_id" });
        Interest.belongsTo(models.User, { as: "user", foreignKey: "users_id" });
    };

    return Interest;

};