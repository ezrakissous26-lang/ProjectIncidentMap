import { client } from "../db/connect.js"

const db = client.db('IncidentMap')
const usersCollection = db.collection('users')

export async function createUser(user) {
    const result = await usersCollection.insertOne(user)
    return result.insertedId
}

export async function findByEmail(email) {
    return await usersCollection.findOne({ email })
}