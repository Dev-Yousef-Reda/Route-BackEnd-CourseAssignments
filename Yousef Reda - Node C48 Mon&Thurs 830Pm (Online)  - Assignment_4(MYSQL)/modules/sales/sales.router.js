// 4
import { Router } from 'express'
import * as SalesController from './sales.controller.js'
const router = Router()

router.post('/', SalesController.addSale)
router.get('/', SalesController.getSales)
router.get('/:id', SalesController.getSale)
router.patch('/:id', SalesController.updateSale)
router.delete('/:id', SalesController.deleteSale)

export default router