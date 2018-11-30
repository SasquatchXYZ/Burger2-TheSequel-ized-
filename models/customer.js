module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }
  });

  Customer.associate = function(models) {
    Customer.hasMany(models.Burger)
  };

  /*Customer.associate = function(models) {
      Customer.belongsTo(models.Burger, {
          foreignKey: {
              allowNull: false
          }
      });

  };*/
  return Customer
};