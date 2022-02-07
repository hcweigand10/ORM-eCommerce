// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowsNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowsNull: false,
      validates: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowsNull: false,
      defaultValue: 10,
      validates: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
