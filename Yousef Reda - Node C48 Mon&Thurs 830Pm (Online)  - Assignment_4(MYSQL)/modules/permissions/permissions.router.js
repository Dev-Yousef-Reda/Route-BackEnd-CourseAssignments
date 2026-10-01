import * as UserController from './permissions.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/add-user', UserController.createUser)
router.post('/revoke-permissions', UserController.revokePermissions)
router.post('/add-permissions', UserController.addPermissions)

export default router