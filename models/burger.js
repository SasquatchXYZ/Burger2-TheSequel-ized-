module.exports = function(sequelize, DataTypes) {
    const Burgers = sequelize.define('Burgers', {
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
    return Burgers
};