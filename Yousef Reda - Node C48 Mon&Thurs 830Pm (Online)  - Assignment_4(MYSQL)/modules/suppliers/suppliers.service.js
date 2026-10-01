// 3 
import { pool } from "../../DB/connection.db.js";

async function addSupplier(params) {
    const { supplierName, contactNumber } = params
    const addQuery = `INSERT INTO Suppliers (supplierName, contactNumber) VALUES (?, ?)`
    const [data] = await pool.execute(addQuery, [supplierName, contactNumber])
    return data
}

async function getSuppliers() {
    const [Suppliers] = await pool.execute('SELECT * FROM Suppliers ')
    return Suppliers
}

async function getSupplier(params) {
    const id = params.id
    const [data] = await pool.execute('SELECT * FROM Suppliers WHERE productID = ? ', [id])
    if (data.length === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function updateSupplier(params) {
    const { supplierName, contactNumber, id } = params
    const [data] = await pool.execute('UPDATE Suppliers SET supplierName = ? , contactNumber = ? WHERE supplierID = ? ', [supplierName, contactNumber, id])
    if (data.affectedRows === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function deleteSupplier(params) {
    const { id } = params
    const [data] = await pool.execute('DELETE FROM Suppliers WHERE supplierID = ? ', [id])
    if (data.affectedRows === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function updateColumn({ oldColumnName, newColumnName, type }) {
    await pool.query(`ALTER TABLE suppliers CHANGE ?? ?? ${type}`, [oldColumnName, newColumnName])
}

export {
    addSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
    updateColumn
}