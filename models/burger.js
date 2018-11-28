module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define('Burger', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    /*Burger.associate = function(models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        })
    };*/
    return Burger
};