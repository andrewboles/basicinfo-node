const express = require('express')
const app = express();
const port = 8080;
const path = require('path');

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/*',(req, res)=>{
  var options = {
    root: path.join(__dirname)
  };
  var fileName = `/${req.url.substring(1)}.html`;
  res.sendFile(fileName, options, function(err){
    if (err){
      res.sendFile(path.join(__dirname, '/404.html'))
    }
  });
});

app.listen(port)