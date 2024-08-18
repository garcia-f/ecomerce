import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProductModel = sequelize.define(
    'products',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
            // defaultValue: 0
        }
    }
);

export default ProductModel