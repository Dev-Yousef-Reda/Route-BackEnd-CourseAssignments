import mysql from 'mysql2/promise';
//  1 - 
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myShop',
};

export let pool = null;

export async function initDatabase(app, port) {
    if (pool) return pool;

    const connection = await mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
    });

    try {
        const [result] = await connection.query('CREATE DATABASE IF NOT EXISTS ??', [config.database]);

        console.log(result.warningStatus === 0
            ? `Database "${config.database}" created.`
            : `Database "${config.database}" already exists.`);
    } finally {
        await connection.end();
    }

    pool = mysql.createPool({
        ...config,
        waitForConnections: true,
        connectionLimit: 0,
        queueLimit: 0
    });

}
