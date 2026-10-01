// 4
import { pool } from "../../DB/connection.db.js";

async function addSale({ quantitySold, productID }) {
    const addQuery = `INSERT INTO sales (quantitySold, productID) VALUES (?, ?)`
    const [data] = await pool.execute(addQuery, [quantitySold, productID])
    console.log({ data });
    return data
}

async function getSales() {
    const [Suppliers] = await pool.execute('SELECT * FROM sales ')
    return Suppliers
}

async function getSale(params) {
    const id = params.id
    const [data] = await pool.execute('SELECT * FROM sales WHERE productID = ? ', [id])
    if (data.length === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function updateSale(params) {
    const { quantitySold, id } = params
    const [data] = await pool.execute('UPDATE sales SET quantitySold = ? WHERE saleID = ? ', [quantitySold, id])
    if (data.affectedRows === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

async function deleteSale(params) {
    const { id } = params
    const [data] = await pool.execute('DELETE FROM sales WHERE saleID = ? ', [id])
    if (data.affectedRows === 0) {
        throw new Error(`${id} not found `, { cause: { status: 404 } })
    }
    return data
}

export {
    addSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}