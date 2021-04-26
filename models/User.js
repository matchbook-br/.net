module.exports = (sequelize, DataTypes) =>{
    
    const User = sequelize.define(
        'User',{
            password: DataTypes.STRING,
            name:DataTypes.STRING,
            email: DataTypes.STRING,
            date_of_birth: DataTypes.STRING,
            gender: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            address_id: DataTypes.INTEGER
        }, {
            tableName: "users",
            timestamps: false
        }
    );

    User.associate = (models) => {
        User.hasOne(models.Address, { as: "address", foreignKey: "users_id" });
        User.hasMany(models.Interest, { as: "interests", foreignKey: "users_id" });
        User.hasMany(models.Book, { as: "book", foreignKey: "users_id" });
    };

    return User;

};
