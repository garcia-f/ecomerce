import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const ProductUserModel = sequelize.define(
    'productUser',
    {
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);


export default ProductUserModel