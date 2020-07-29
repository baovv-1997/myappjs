import Users from "./User";

module.exports = (sequelize, DataType) => {
  const Orders = sequelize.define("Orders",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      }
    },
  );
  Orders.associate = function(models) { 
    Orders.belongsTo(models, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
  }

  return Orders;
} 
