const express = require('express');
const index = express();
const mongoose = require('mongoose');


//Routes
 index.get('/', (req, res) => {
    res.send('');
 });

 index.get('/posts', (req, res) => {
    res.send('');
 });

 //Connect to MongoDB


const http = require('http');
const fs = require('fs')
const port = 3000;

const server = http.createServer(function(req, res){ 
    res.writeHead(200, {'content-type': 'text/html'})
    fs.readFile('home.html', function(error, data){ 
        if (error){ 
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        } 
        res.end()
    })
   
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})


//THIS IS THE API FOR THE RARITY OF THE NFTS(NOT SURE HOW TO MAKE IT WORK, I JUST ADDED IT HERE SO YOU CAN SEE)
const axios = require("axios");

 const options = {
  method: 'GET',
  url: 'https://nft-rarity-calculator.p.rapidapi.com/v1/api/scores',
  params: {
    source: 'https://gist.githubusercontent.com/R-iskey/102bd2836bb15d45cccb066ea7f32f4c/raw/58c6db787b05ef9eff3741cf42c6548c47b6ef51/dummy_metadata'
  },
  headers: {
    'X-RapidAPI-Key': '271c284f8emshdd06324b7b1a08ep1d83abjsn2895e07fe61f',
    'X-RapidAPI-Host': 'nft-rarity-calculator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});