import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserModel = sequelize.define(
    'users',
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
            type: DataTypes.ENUM("cliente", "vendedor", "admin"),
            defaultValue: "cliente",
            allowNull: false
        }
    }
);

export default UserModel