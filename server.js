const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/about',(req,res)=>{
  res.send('Thong tin chi tiet');
  res.send('ket thuc');
})
app.listen(3000,()=>{
  console.log("thanh cong");
});