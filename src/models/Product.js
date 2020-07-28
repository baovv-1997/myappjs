module.exports = (sequelize, DataType) => {
  const Products = sequelize.define("Products",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      price: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      description: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    }
  );
  Products.associate = function(models) {
    Products.hasMany(models);
  }
  return Products;
} 