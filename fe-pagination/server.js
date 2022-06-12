const express = require ('express')
//const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
 
 
const PORT = process.env.PORT || 4200
//const api = require('./routes/api')
const server = express()
 
//server.use(bodyParser.json())  // I think bodyParser not needed at some point with nodejs & express.
server.use(express.json({extended: false})); // use querystring library
server.use(cors())
 
// Point static path to dist
server.use(express.static(path.join(__dirname, 'build')));
 
//app.use('/api', api)
server.get('/hello', function(req, res){
    res.send('Hello from NodeJS Server on Heroku with React')
})
 
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));           // works
  });
 
server.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
})
