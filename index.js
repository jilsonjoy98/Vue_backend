const express=require('express');
const cors =require('cors');
const logic =require('./Server/logic')
const server =express();
server.use(
  cors({
    origin: "http://http://localhost:5173",
  })
);
server.use(express.json());
server.listen(8000,()=>{
    console.log('catagory server started at 8000')
})
server.get("/get-all-list", (req, res) => {
  logic.allLists().then((result) => {
    res.status(result.statusCode).json(result);
  });
});