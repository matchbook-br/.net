module.exports = (sequelize, DataTypes) => {
    
    const Address = sequelize.define(
        'Address', {
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            cep: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            complement: DataTypes.STRING,
            users_id: DataTypes.INTEGER
        }, {
            tableName: "address",
            timestamps: false
        }
    );

    return Address;

}
