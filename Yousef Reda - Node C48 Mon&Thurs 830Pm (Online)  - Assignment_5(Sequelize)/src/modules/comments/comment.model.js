import { DataTypes } from "sequelize";
import { sequelize } from "../../db/connection.js";

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.STRING(),
    }
}, {
    tableName: 'comments'
})

export default Comment
