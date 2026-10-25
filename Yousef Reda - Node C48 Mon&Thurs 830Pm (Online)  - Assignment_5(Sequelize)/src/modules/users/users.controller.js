import successResponse from '../../common/successResponse.js';
import * as UsersService from './users.service.js'

async function addUser(req, res) {
    const inputs = req.body;
    const user = await UsersService.addUser(inputs)
    //  I destructed password here to remove it from the returned value
    const { password, ...data } = user.toJSON()
    successResponse({ res, data, status: 201, message: 'user added successfully' })
}

async function createOrUpdateUser(req, res) {
    const { email, name, age, role } = req.body;
    const { id } = req.params
    const { user, created } = await UsersService.createOrUpdateUser({ email, name, age, role, id })
    const data = user.toJSON()
    successResponse({ res, data, status: 200, message: 'user created or updated successfully' })
}

async function findUserByEmail(req, res) {
    const { email } = req.query;
    const user = await UsersService.findUserByEmail({ email })
    const data = user.toJSON()
    successResponse({ res, data, status: 200, })
}

async function findUserById(req, res) {
    const { id } = req.params;
    const user = await UsersService.findUserById({ id })
    const data = user.toJSON()
    successResponse({ res, data, status: 200, })
}

export {
    addUser,
    createOrUpdateUser,
    findUserByEmail,
    findUserById
}
