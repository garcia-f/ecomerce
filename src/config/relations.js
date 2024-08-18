import sequelize from "../config/db.js";
import UserModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
import BuysModel from "../models/buys.model.js";
import BuysUserModel from "../models/buysUser.model.js"
import ProductUserModel from "../models/productUser.model.js"


UserModel.belongsToMany(ProductModel, { through: ProductUserModel });
ProductModel.belongsToMany(UserModel, { through: ProductUserModel });

UserModel.belongsToMany(BuysModel, { through: BuysUserModel });
BuysModel.belongsToMany(UserModel, { through: BuysUserModel });


export default sequelize;