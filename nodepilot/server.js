const express=require('express');
const PORT=8080||process.env.PORT;
const app=express();
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
});