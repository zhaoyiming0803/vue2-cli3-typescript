const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Expose-Headers, Platform, Token');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS, HEAD');  
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});

app.get('/api/user/info', (req, res) => {
  res.json({
    code: 0,
    data: {
      name: 'zymfe',
      age: 18
    },
    msg: ''
  });
});

console.log('app listen 8091');
app.listen(8091);