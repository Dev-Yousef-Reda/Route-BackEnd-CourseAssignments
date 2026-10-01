import { successResponse } from "../../common/success.response.js";
import * as ReportsService from './reports.service.js'

// 10

async function getStock(req, res) {
    const { filter, quantity } = req.query;
    const [data] = await ReportsService.getStock(filter, quantity)
    successResponse({ res, data })
}

// 11

async function getSuppliers(req, res) {
    const { supplierName = '' } = req.query;
    const data = await ReportsService.getSuppliers(supplierName)
    successResponse({ res, data })
}

// 13

async function getAllData(req, res) {
    const data = await ReportsService.getAllData()
    successResponse({ res, data })
}


export {
    getStock,
    getSuppliers,
    getAllData
}