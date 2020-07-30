import bcrypt from 'bcrypt';

module.exports = (sequelize, DataType) => {
  const Users = sequelize.define("Users",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      email: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: DataType.STRING,
        allowNull: true,
      }, 
      phone: {
        type: DataType.STRING,
        allowNull: true,
      }, 
      address: {
        type: DataType.STRING,
        allowNull: true,
      }, 
      nationality: {
        type: DataType.STRING,
        allowNull: true,
      },
      skill: {
        type: DataType.STRING,
        allowNull: true,
      },
      interests: {
        type: DataType.STRING,
        allowNull: true,
      }
    },
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    }
  );

  Users.associate = function (models) {
    Users.hasMany(models);
  }

  return Users;
} 