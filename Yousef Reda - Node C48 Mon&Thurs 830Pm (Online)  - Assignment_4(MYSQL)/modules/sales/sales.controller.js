// 4
import { successResponse } from "../../common/success.response.js";
import * as SalesService from './sales.service.js'

async function addSale(req, res) {
    const params = req.body
    const data = await SalesService.addSale(params)
    successResponse({ res, data, status: 201 })
}

async function getSales(req, res) {
    const data = await SalesService.getSales()
    successResponse({ res, data })
}

async function getSale(req, res) {
    const params = req.params
    const data = await SalesService.getSale(params)
    successResponse({ res, data })
}

async function updateSale(req, res) {
    let params = req.body
    params.id = req.params.id
    const data = await SalesService.updateSale(params)
    successResponse({ res, data })
}

async function deleteSale(req, res) {
    const params = req.params
    await SalesService.deleteSale(params)
    successResponse({ res, message: undefined, status: 204 })
}

export {
    addSale,
    getSales,
    getSale,
    updateSale,
    deleteSale
}