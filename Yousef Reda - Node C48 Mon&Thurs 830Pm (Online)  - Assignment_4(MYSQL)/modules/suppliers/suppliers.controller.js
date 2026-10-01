// 3
import { successResponse } from "../../common/success.response.js";
import * as SuppliersService from './suppliers.service.js'

async function addSupplier(req, res) {
    const params = req.body
    const data = await SuppliersService.addSupplier(params)
    successResponse({ res, data, status: 201 })
}

async function getSuppliers(req, res) {
    const data = await SuppliersService.getSuppliers()
    successResponse({ res, data })
}

async function getSupplier(req, res) {
    const params = req.params
    const data = await SuppliersService.getSupplier(params)
    successResponse({ res, data })
}

async function updateSupplier(req, res) {
    let params = req.body
    params.id = req.params.id
    const data = await SuppliersService.updateSupplier(params)
    successResponse({ res, data })
}

async function deleteSupplier(req, res) {
    const params = req.params
    await SuppliersService.deleteSupplier(params)
    successResponse({ res, message: undefined, status: 204 })
}

// 5
async function updateColumn(req, res) {
    const { oldColumnName, newColumnName, type } = req.body
    await SuppliersService.updateColumn({ oldColumnName, newColumnName, type })
    successResponse({ res })
}


export {
    addSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
    updateColumn
}