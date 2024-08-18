import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserModel = sequelize.define(
    'Users',
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM("client", "seller", "admin"),
            defaultValue: "client",
            allowNull: false
        }
    }
);

export default UserModel