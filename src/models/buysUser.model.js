import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const BuysUserModel = sequelize.define(
    'buysUser',
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
        buysId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
            references: {
                model: 'buys',
                key: 'id'
            }
        }
    }
);


export default BuysUserModel