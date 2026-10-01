// 2 
import { successResponse } from "../../common/success.response.js";
import * as ProductsService from './products.service.js'
async function getProducts(req, res) {
    const data = await ProductsService.getProducts()
    successResponse({ res, data })
}

async function addProduct(req, res) {
    const params = req.body
    const data = await ProductsService.addProduct(params)
    successResponse({ res, data, status: 201 })
}

async function getProduct(req, res) {
    const params = req.params
    const data = await ProductsService.getProduct(params)
    successResponse({ res, data })
}

async function updateProduct(req, res) {
    let params = req.body
    params.id = req.params.id
    const data = await ProductsService.updateProduct(params)
    successResponse({ res, data })
}

async function deleteProduct(req, res) {
    const params = req.params
    await ProductsService.deleteProduct(params)
    successResponse({ res, message: undefined, status: 204 })
}

// 5
async function addColumn(req, res) {
    const { columnName } = req.body
    await ProductsService.addColumn(columnName)
    successResponse({ res, message: `column "${columnName}" added`, status: 201 })
}

async function removeColumn(req, res) {
    const { columnName } = req.body
    await ProductsService.removeColumn(columnName)
    successResponse({ res, message: undefined, status: 204 })
}

async function addConstraint(req, res) {
    const { columnName, constraint } = req.body
    await ProductsService.addConstraint(columnName, constraint)
    successResponse({ res, message: 'done' })
}

// 10

async function getStock(req, res) {
    const { filter, quantity } = req.query;
    const [data] = await ProductsService.getStock(filter, quantity)
    successResponse({ res, data })
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