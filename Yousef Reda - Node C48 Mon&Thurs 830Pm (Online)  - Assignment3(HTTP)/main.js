/*

    Part 1

    the answers for part1 are provided on a notion file on the following  link:

    https://app.notion.com/p/Assignment-3-3e0ff6ba8857801dbdcdc2b6b869aa7a?source=copy_link

    you can kindly edit on the file if there is any misunderstanding or if there is anything you would like to modify or add :)

*/


// Part 2
const { resolve } = require('node:path')
const fsp = require('node:fs/promises')
const express = require('express')
const app = express()
const port = 3000
const usersFilePath = resolve('users.json')


async function getUsers() {
    const users = await fsp.readFile(usersFilePath, 'utf-8')
    return (JSON.parse(users));
}

function checkIfUserExisted(users, method, userEmail = undefined, userId = undefined) {
    switch (method) {
        case 'email':
            return users.filter((user) => user.email === userEmail)
        case 'id':
            return users.filter((user) => user.id === userId)
    }
}

async function addUser(users, userData) {
    userData.id = `${Date.now()}`
    users.push(userData)
    const newUsers = JSON.stringify(users)
    await fsp.writeFile(usersFilePath, newUsers)
}

async function updateUser(users, userData, newData) {

    if (newData.age !== undefined) {
        userData.age = newData.age
    }
    if (newData.name !== undefined) {
        userData.name = newData.name
    }
    const newUsers = JSON.stringify(users)
    await fsp.writeFile(usersFilePath, newUsers)
}

async function deleteUser(users, id) {

    const newUsers = users.filter((user) => user.id !== id)
    await fsp.writeFile(usersFilePath, JSON.stringify(newUsers))
}

app.use(express.json())

//  1 -

app.post('/user', async (req, res, next) => {
    const { name, age, email, password } = req.body

    const users = await getUsers()

    const isUserExisted = checkIfUserExisted(users, 'email', email)

    if (isUserExisted.length == 1) {
        res.status(409).json({ message: 'user is already existed' })
        return
    }

    await addUser(users, { name, age, email, password })

    res.status(201).json({ message: `User is added successfully` })
})

//  2 -

app.patch('/user/:id', async (req, res, next) => {
    const { name, age } = req.body
    const { id } = req.params

    const users = await getUsers()
    const isUserExisted = checkIfUserExisted(users, 'id', undefined, id)

    if (!(isUserExisted.length == 1)) {
        res.status(404).json({ message: 'user is not found' })
        return
    }

    await updateUser(users, isUserExisted[0], { name, age })

    res.status(200).json({ message: 'user is updated successfully' })
})

// 3 - 

app.delete('/user{/:id}', async (req, res, next) => {

    let id = null

    if (req.body?.id) {
        id = req.body.id
    }

    if (req.params?.id) {
        id = req.params.id
    }

    const users = await getUsers()
    const isUserExisted = checkIfUserExisted(users, 'id', undefined, id)

    if ((isUserExisted.length !== 1)) {
        res.status(404).json({ message: 'user is not found' })
        return
    }

    await deleteUser(users, id)

    res.status(200).json({ message: 'user is deleted successfully' })
})

//  4 -

app.get('/user/getByName', async (req, res, next) => {
    const username = req.query.name

    const users = await getUsers()

    const searchResult = users.filter((user) => user.name.includes(username))

    if (searchResult.length === 0) {
        res.status(404).json({ message: "user is not found" })
        return
    }

    res.json({
        message: 'done',
        data: searchResult
    })
})

// 5 -

app.get('/users', async (req, res, next) => {

    const users = await getUsers()
    res.json({
        message: 'done',
        data: users
    })
})

// 6 -

app.get('/user/filter', async (req, res, next) => {
    const minAge = req.query.minAge

    const users = await getUsers()

    const searchResult = users.filter((user) => user.age > minAge)

    if (searchResult.length === 0) {
        res.status(404).json({ message: "no user found" })
        return
    }

    res.json({
        message: 'done',
        data: searchResult
    })
})

// 7 -

app.get('/user/:id', async (req, res, next) => {

    const id = req.params.id
    const users = await getUsers()
    const isUserExisted = checkIfUserExisted(users, 'id', undefined, id)

    if (isUserExisted.length !== 1) {
        res.status(404).json({ message: 'user is not found' })
        return
    }

    res.status(200).json({ data: isUserExisted[0] })
})

app.all('/*dummy', (req, res, next) => {
    res.status(404).json({ message: `invalid routing` })
})

app.use((err, req, res, next) => {
    res.status(400).json({ message: err.message })
})

app.listen(port, () => {
    console.log(`server has started on port: ${port}`);

})

