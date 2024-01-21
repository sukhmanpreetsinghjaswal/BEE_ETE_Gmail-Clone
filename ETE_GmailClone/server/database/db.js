import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-jt3xn2r-shard-00-00.a4uprsy.mongodb.net:27017,ac-jt3xn2r-shard-00-01.a4uprsy.mongodb.net:27017,ac-jt3xn2r-shard-00-02.a4uprsy.mongodb.net:27017/?ssl=true&replicaSet=atlas-f7m3qb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;