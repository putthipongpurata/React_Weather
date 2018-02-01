const PORT = 3000;
const express = require('express');

// Create our app
const app = express();

app.use(express.static('public'));

app.listen(PORT,()=>{
  console.log(`Express server is up on PORT ${PORT}`);
});