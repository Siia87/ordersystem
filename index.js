//const express = require('express')
const app = express()
const port = 80
import express from 'express'
import User from './routes/users.js'
import Product from './routes/products.js'
import Order from './routes/orders.js'
import { MongoClient } from "mongodb"

app.get('/', (req, res) => {
  res.send('hej')
})

app.use('/users', User)
app.use('/products', Product)
app.use('/orders', Order)

const dbconn = process.env.DBCONN || 'mongodb+srv://order:order123@cluster0.q5oir.mongodb.net/ordersystem?retryWrites=true&w=majority'

const mongoClient = new MongoClient(dbconn);
mongoClient.connect(function (err, client) {
  console.log('connected to db')
  client.close();
});






app.listen(port, () => {
  console.log(`tjenare hejsan http://localhost:${port}`)
})
