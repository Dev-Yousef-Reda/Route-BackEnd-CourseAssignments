import User from "./user.model.js";

async function addUser(inputs) {
    const user = User.build(inputs)
    await user.save()
    return user
}

async function createOrUpdateUser({ email, name, age, role, id }) {
    const [user, created] = await User.upsert({ id, email, name, age, role }, {
        validate: false
    })
    return { user, created }
}

async function findUserByEmail({ email }) {
    const user = await User.findOne({
        where: { email },
        attributes: {
            exclude: ['password']
        }
    })
    if (!user) {
        throw new Error('no user found', { cause: { status: 404 } })
    }
    return user
}

async function findUserById({ id }) {
    const user = await User.findOne({
        where: { id },
        attributes: {
            exclude: ['password']
        }
    })
    if (!user) {
        throw new Error('no user found', { cause: { status: 404 } })
    }
    return user
}


export {
    addUser,
    createOrUpdateUser,
    findUserByEmail,
    findUserById
}