module.exports = (sequelize, DataTypes) =>{
    
    const User = sequelize.define(
        'User', {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            gender: DataTypes.STRING,
            date_of_birth: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            addresses_id: DataTypes.STRING
        }, {
            tableName: "users",
            timestamps: false
        }
    );

    User.associate = (models) => {
        User.hasOne(models.Address, { as: "addresses", foreignKey: "id" });
        User.hasOne(models.Interest, { as: "interests", foreignKey: "users_id" });
        User.hasMany(models.Book, { as: "books", foreignKey: "users_id" });
    };

    return User;

};
