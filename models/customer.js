module.exports = function(sequelize, DataTypes) {
    const Customers = sequelize.define('Customers', {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        burger_num: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Customers
};