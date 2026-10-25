import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db/connection.js";

class Post extends Model {

}

Post.init({
    title: {
        type: DataTypes.STRING(),
    },
    content: {
        type: DataTypes.STRING(),
    }
}, {
    sequelize,
    tableName: 'posts',
    paranoid: true
})

export default Post