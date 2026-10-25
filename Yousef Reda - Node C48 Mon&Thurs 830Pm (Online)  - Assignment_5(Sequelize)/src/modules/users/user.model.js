import { DataTypes } from "sequelize";
import { sequelize } from "../../db/connection.js";

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING(),
        field: 'u_name'
    },
    email: {
        type: DataTypes.STRING(),
        unique: true,
        validate: {
            isEmail: { msg: 'invalid email' }
        }
    },
    password: {
        type: DataTypes.STRING(),
        validate: {
            checkPasswordLength(value) {
                if ((value).length < 6) {
                    throw new Error('password must be at least than 6')
                }
            }
        }
    },
    age: {
        type: DataTypes.INTEGER
    }
    ,
    role: {
        type: DataTypes.ENUM(['user', 'admin'])
    }
}, {
    tableName: 'users'
})

User.addHook('beforeCreate', (user) => {
    if (user.name.length < 2) {
        throw new Error('username must be greater than 2 letters')
    }
})

export default User