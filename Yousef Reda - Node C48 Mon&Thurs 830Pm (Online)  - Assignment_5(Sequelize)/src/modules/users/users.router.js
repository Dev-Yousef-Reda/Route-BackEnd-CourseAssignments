
import * as UsersController from './users.controller.js'

import { Router } from 'express'

const router = Router()

router.get('/by-email', UsersController.findUserByEmail)
router.get('/:id', UsersController.findUserById)
router.post('/signup', UsersController.addUser)
router.put('/:id', UsersController.createOrUpdateUser)


export default router