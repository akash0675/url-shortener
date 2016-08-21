'use strict';

const express = require('express');
const path = require('path');
 
 const app = express();

app.use(express.static(path.join(__dirname, 'public')));

 app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname, 'views/index.html'));
 });

 app.post('/api/shorten', function(req, res) {

 });

 app.get('/:encoded_id', function(req, res) {

 });

 var server = app.listen(3000, function() {
     console.log('Server listening on port 3000');
 });
 