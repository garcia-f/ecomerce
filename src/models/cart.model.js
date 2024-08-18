import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import UserModel from "./user.model.js";
import ProductModel from "./product.model.js";


const CartModel = sequelize.define(
    'Cart',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ProductModel,
                key: 'id'
            }
        }
    }
)

export default CartModel