const express=require('express');
const app=express();
let skills=[];
const port=8080||process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    const {name}=req.body;
    console.log(`Hello ${name} welcome to node.js`);
});
app.post('/intro',(req,res)=>{
    const {name}=req.body;
    res.status(200).json({
        msg:`Hello ${name} welcome  to node js`
    })
});
app.post('/skills',(req,res)=>{
    const {skill}=req.body;
      skills.push(skill);
      res.status(200).json({
          skills:skills
      });
});
app.get('/skill',(req,res)=>{
    res.status(200).json({
        skills:skills
    });
});
app.delete('/skills/:name',(req,res)=>{
    const {name}=req.params;
    let skill= skills.filter(skill=>{
         return skill!==name
    });
    res.status(200).json({
        skills:skill
    });
});
app.listen(port,()=>{
    console.log('server started');
});