import { pool } from "../../DB/connection.db.js"

async function addUserPermissions(username, permissions, tables = ['all']) {
    if (tables[0] === 'all') {
        await pool.query(`GRANT ${permissions.join(', ')} ON myShop.* TO ?@'localhost'`, [username])
        return
    }
    for (const table of tables) {
        await pool.query(`GRANT ${permissions.join(', ')} ON myShop.?? TO ?@'localhost'`, [table, username])
    }
}

async function createUser(username, password, permissions) {
    const addUserQuery = `CREATE USER IF NOT EXISTS ?@'localhost' IDENTIFIED BY ?`
    await pool.query(addUserQuery, [username, password])
    await addUserPermissions(username, permissions)
    return
}

async function revokeUserPermissions(username, permissions) {
    if (!permissions.length) {
        throw new Error('permissions must be a non-empty array', { cause: { status: 400 } })
    }
    const revokeQuery = `REVOKE ${permissions.join(', ')} ON myShop.* FROM ?@'localhost'`
    const [result] = await pool.query(revokeQuery, [username])
    return result
}

export {
    createUser,
    addUserPermissions,
    revokeUserPermissions
}