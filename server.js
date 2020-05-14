// server.js
console.log('May the Node be with you')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://vrinda:vrinda123@cluster0-gcyej.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true})
.then(client => {
console.log('Connected to Database')
const db = client.db('star-wars-quotes')
app.use(/*......*/)
app.get(/*......*/)
app.post(/*.....*/)
app.listen(/*.....*/)
const quotesCollection = db.collection('quotes')
})
//.catch(console.error)
app.listen(3000, function() {
  console.log('listening on 3000')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
quotesCollection.insertone(req.body)
.then(result => {
console.log(result)
})
.catch(error => console.error(error))
})
