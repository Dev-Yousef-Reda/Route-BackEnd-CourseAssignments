// 2
import { pool } from "../../DB/connection.db.js";

async function getProducts() {
    const [products] = await pool.execute('SELECT * FROM products ')
    return products
}

async function addProduct(params) {
    const addQuery = `INSERT INTO products (productName, price, stockQuantity, supplierID  ) VALUES (?, ? , ?, ? )`
    const [data] = await pool.execute(addQuery, [params.productName, params.price, params.stockQuantity, params.supplierID])
    return data
}

async function getProduct(params) {
    const id = params.id
    const [data] = await pool.execute('SELECT * FROM products WHERE productID = ? ', [id])
    if (data.length === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function updateProduct(params) {
    const { name, price, id } = params
    const [data] = await pool.execute('UPDATE products SET productName = ? , price = ? WHERE productID = ? ', [name, price, id])
    if (data.affectedRows === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function deleteProduct(params) {
    const { id } = params
    const [data] = await pool.execute('DELETE FROM products WHERE productID = ? ', [id])
    if (data.affectedRows === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

// 5

async function addColumn(columnName) {
    await pool.query('ALTER TABLE products ADD ?? VARCHAR(20)', [columnName])
}


async function removeColumn(columnName) {
    await pool.query('ALTER TABLE products DROP COLUMN ??', [columnName])
}


async function addConstraint(columnName, constraint) {
    await pool.query(`ALTER TABLE products MODIFY ?? VARCHAR(100) ${constraint}`, [columnName])
}

async function getStock(filter, quantity = 1) {
    let sort = filter === 'highest' ? 'DESC' : ''
    const stockQuery = `SELECT * FROM PRODUCTS ORDER BY stockQuantity ${sort} LIMIT ${quantity}  `
    const result = await pool.execute(stockQuery)
    return result
}

export {
    getProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    addColumn,
    removeColumn,
    addConstraint,
    getStock
}