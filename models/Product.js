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
      type: DataTypes.TEXT,
      allowsNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowsNull: false,
      validates: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowsNull: false,
      validates: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.TEXT,
      allowsNull: false
    },
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
