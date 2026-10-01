import { Router } from 'express'
import * as ProductsController from './products.controller.js'
const router = Router()

router.get('/', ProductsController.getProducts)
router.get('/get-stock', ProductsController.getStock)
router.get('/:id', ProductsController.getProduct)

router.post('/', ProductsController.addProduct)

router.post('/add-constraint', ProductsController.addConstraint)
router.post('/add-column', ProductsController.addColumn)
router.patch('/:id', ProductsController.updateProduct)

router.delete('/remove-column', ProductsController.removeColumn)
router.delete('/:id', ProductsController.deleteProduct)

export default router