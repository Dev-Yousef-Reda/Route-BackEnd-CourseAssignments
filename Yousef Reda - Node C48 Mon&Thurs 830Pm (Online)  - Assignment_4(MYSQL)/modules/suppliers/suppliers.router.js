// 3
import { Router } from 'express'
import * as SuppliersController from './suppliers.controller.js'
const router = Router()

router.post('/', SuppliersController.addSupplier)
router.get('/', SuppliersController.getSuppliers)
router.get('/:id', SuppliersController.getSupplier)
router.patch('/:id', SuppliersController.updateSupplier)
router.delete('/:id', SuppliersController.deleteSupplier)
router.put('/update-column', SuppliersController.updateColumn)

export default router