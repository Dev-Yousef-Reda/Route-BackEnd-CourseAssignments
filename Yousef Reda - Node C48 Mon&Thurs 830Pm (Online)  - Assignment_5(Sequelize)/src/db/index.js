import User from "../modules/users/user.model.js";
import Post from "../modules/posts/post.model.js";
import Comment from "../modules/comments/comment.model.js";

// User - Posts associations
User.hasMany(Post, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});
Post.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});

// Comment - Post associations

Post.hasMany(Comment, {
    foreignKey: {
        name: 'postId',
        allowNull: false
    }
});

Comment.belongsTo(Post, {
    foreignKey: {
        name: 'postId',
        allowNull: false
    }
});

// Comment - User associations

User.hasMany(Comment, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});

Comment.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});
