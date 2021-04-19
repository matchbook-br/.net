module.exports = (sequelize, DataTypes) =>{
    
    const User = sequelize.define(
        'User',{
            password: DataTypes.STRING,
            name:DataTypes.STRING,
            email: DataTypes.STRING,
            date_of_birth: DataTypes.STRING,
            gender: DataTypes.STRING,
            phone_number: DataTypes.STRING
        }, {
            tableName: "users",
            timestamps: false
        }
    );

    return User;

};
