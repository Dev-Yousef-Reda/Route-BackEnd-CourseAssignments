//                        Part 2

const fs = require('node:fs')
const fsp = require('node:fs/promises')
const http = require('node:http')
const path = require('node:path')

async function getUsers() {
    let users = await fsp.readFile(path.resolve('users.json'), "utf-8")
    users = JSON.parse(users)
    return users
}

function checkIfUserExists(users, userEmail, method = 'email', userId = '') {
    if (method === 'email')
        return users.filter((user) => user.email === userEmail)
    if (method === 'id')
        return users.filter((user) => user.id === userId)
}

function updateFile(filePath, data) {
    fs.writeFileSync(filePath, data)
}

function addUser(users, userData) {
    userData.id = `${Date.now()}`
    users.push(userData)
    const usersString = JSON.stringify(users)
    updateFile(path.resolve('users.json'), usersString)
}

function updateUser(users, userId, userData) {

    for (let user of users) {
        if (user.id === userId) {
            if (userData.age) {
                user.age = userData.age
            }
            if (userData.name) {
                user.name = userData.name
            }
        }
    }
    const usersString = JSON.stringify(users)
    updateFile(path.resolve('users.json'), usersString)
}

function deleteUser(users, userId) {
    users = users.filter((user) => user.id != userId)
    const usersString = JSON.stringify(users)
    updateFile(path.resolve('users.json'), usersString)
}

function getUser(users, userId) {
    const user = users.filter((user) => user.id == userId)
    return user
}

const server = http.createServer(async (req, res) => {

    // 1 -

    if (req.method === 'POST' && req.url === '/user') {
        const users = await getUsers()
        let userData = ''
        req.on('data', (chunk) => {
            userData += chunk
        })
        req.on('end', () => {
            userData = JSON.parse(userData)

            const isUserExisted = checkIfUserExists(users, userData.email).length

            if (isUserExisted) {
                res.statusCode = 409
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'email already exists' }))
                return
            }

            addUser(users, userData)
            res.statusCode = 201
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'user added successfully' }))
        })
    }

    //  2- 

    if (req.method === "PATCH") {
        const pathSegments = (req.url).split('/')

        if (pathSegments[1] === 'user') {
            const userId = pathSegments[2]
            const users = await getUsers()
            const isUserExisted = checkIfUserExists(users, undefined, 'id', userId).length

            if (!isUserExisted) {
                res.statusCode = 404
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'user id not found' }))
                return
            }
            let userData = ''

            req.on('data', (chunk) => {
                userData += chunk
            })
            req.on('end', () => {
                userData = JSON.parse(userData)

                updateUser(users, userId, userData)

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'user is updated successfully' }))
            })
        }
    }

    // 3 -

    if (req.method === "DELETE") {
        const pathSegments = (req.url).split('/')

        if (pathSegments[1] === 'user') {
            const userId = pathSegments[2]
            const users = await getUsers()
            const isUserExisted = checkIfUserExists(users, undefined, 'id', userId).length

            if (!isUserExisted) {
                res.statusCode = 404
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'user id is not found' }))
                return
            }
            let userData = ''

            deleteUser(users, userId)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'user deleted successfully' }))
        }
    }

    // 4 -

    if (req.method === 'GET' && req.url === '/users') {
        const users = await getUsers()
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    }

    // 5 -

    if (req.method === "GET") {
        const pathSegments = (req.url).split('/')

        if (pathSegments[1] === 'user') {
            const userId = pathSegments[2]
            const users = await getUsers()
            const isUserExisted = checkIfUserExists(users, undefined, 'id', userId).length

            if (!isUserExisted) {
                res.statusCode = 404
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'user id is not found' }))
                return
            }
            let userData = ''

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ user: getUser(users, userId) }))
        }
    }

    if (req.url = "/*") {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'invalid routing' }))
    }

})

server.listen(3000, () => {
    console.log(`server has started`);
})
