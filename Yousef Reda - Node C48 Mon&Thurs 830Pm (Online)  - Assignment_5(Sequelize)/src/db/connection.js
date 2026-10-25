import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('socialmedia', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        underscored: true
    }
})

async function connectDB() {
    await sequelize.authenticate()
    await sequelize.sync({
        // alter: true,
    })
}

export {
    sequelize,
    connectDB
}