import sequelize from "../config/db.js";
import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
import BuysModel from "../models/buys.model.js";
import SaleModel from "../models/sale.model.js";
import CartModel from "../models/cart.model.js";

// Relación de Usuario con Compra de uno a mucho
UserModel.hasMany(BuysModel, { foreignKey: 'user_id' });
BuysModel.belongsTo(UserModel, { foreignKey: 'user_id' });

// Relación de Usuario con Venta 
UserModel.hasMany(SaleModel, { foreignKey: 'user_id' });
SaleModel.belongsTo(UserModel, { foreignKey: 'user_id' });

// Relación de Usuario con Carrito
UserModel.hasMany(CartModel, { foreignKey: 'user_id' });
CartModel.belongsTo(UserModel, { foreignKey: 'user_id' });

// Relación de Producto con Carrito
ProductModel.hasMany(CartModel, { foreignKey: 'product_id' });
CartModel.belongsTo(ProductModel, { foreignKey: 'product_id' });

export default sequelize;