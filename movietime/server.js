const express=require('express');

const PORT=8080;
const app=express();
const movie=require('./controllers/movie');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/movie',movie);
app.listen(PORT,()=>
{ console.log('server started on '+ PORT);
});