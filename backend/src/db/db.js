import { MongoClient } from 'mongodb'
import 'dotenv/config'

const MONGO_URi = process.env.MONGO_URi

export const client = new MongoClient(MONGO_URi)

export async function clientConnect() {
    try {
        await client.connect()
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error :', error.message)
    }
}