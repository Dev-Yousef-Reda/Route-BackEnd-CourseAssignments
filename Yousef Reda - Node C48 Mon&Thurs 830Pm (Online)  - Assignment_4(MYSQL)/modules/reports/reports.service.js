import { pool } from "../../DB/connection.db.js";

async function getStock(filter, quantity = 1) {
    let sort = filter === 'highest' ? 'DESC' : ''
    const stockQuery = `SELECT * FROM PRODUCTS ORDER BY stockQuantity ${sort} LIMIT ${quantity}  `
    const result = await pool.execute(stockQuery)
    return result
}

async function getSuppliers(supplierName) {
    const supplierQuery = 'SELECT * FROM suppliers WHERE supplierName LIKE ?';
    const [rows] = await pool.query(supplierQuery, [`%${supplierName}%`]);
    return rows;
}

async function getAllData() {
    const getAllDataQuery = 'SELECT p.productName , s.quantitySold, s.saleDate  FROM products as p RIGHT JOIN sales as s ON p.productID = s.productID ';
    const [rows] = await pool.query(getAllDataQuery);
    return rows;
}

export {
    getStock,
    getSuppliers,
    getAllData
}