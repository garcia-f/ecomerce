import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import UserModel from "./user.model.js";

const SaleModel = sequelize.define(
    'sale',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        paymentMethod: {
            type: DataTypes.ENUM("efectivo", "tarjeta", "transferencia"),
            defaultValue: "efectivo",
            allowNull: false
        }
    }
);


export default SaleModel