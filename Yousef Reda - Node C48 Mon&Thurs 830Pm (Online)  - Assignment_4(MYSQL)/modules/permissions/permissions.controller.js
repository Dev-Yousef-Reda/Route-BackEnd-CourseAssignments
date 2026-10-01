import { successResponse } from '../../common/success.response.js'
import * as PermissionsService from './permissions.service.js'


async function createUser(req, res) {
    const { username, password, permissions } = req.body
    await PermissionsService.createUser(username, password, permissions)
    successResponse({ res, status: 201 })
}

async function revokePermissions(req, res) {
    const { username, permissions } = req.body
    await PermissionsService.revokeUserPermissions(username, permissions)
    successResponse({ res, message: `revoked ${permissions.join(', ')} from "${username}"` })
}

async function addPermissions(req, res) {
    const { username, permissions, tables } = req.body
    await PermissionsService.addUserPermissions(username, permissions, tables)
    successResponse({ res, message: `added ${permissions.join(', ')} to "${username}"` })
}

export {
    createUser,
    revokePermissions,
    addPermissions
}   