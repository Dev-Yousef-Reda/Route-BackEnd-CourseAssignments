import { Router } from 'express'
import * as ReportsController from './reports.controller.js'
const router = Router()

router.get('/get-stock', ReportsController.getStock)
router.get('/get-suppliers', ReportsController.getSuppliers)
router.get('/get-all-data', ReportsController.getAllData)

export default router