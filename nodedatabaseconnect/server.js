const express=require('express');
const db=require('./config/database');
const app=express();
const PORT=8080||process.env.PORT;
db.connect((error)=>{
    if(error)throw error;
    console.log('Database connected');
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/car/add',(req,res)=>{
    const {name,model,company}=req.body;
    let body={Name:name,Model:model,Company:company};
    let sql='INSERT INTO cars SET ?';
    let query=db.query(sql,body,(err,result)=>{
        if(err)
        {
            res.status(401).json({
                msg:err
            });
        }
        else 
        {
            res.status(200).json({
                msg:'Car created'
            });
        }
    });
});
app.get('/',(req,res)=>{
    let sql='SELECT * from cars';
    let query=db.query(sql,(err,result)=>{
        if(!err)
        {
          if(result.length>0)
          {
             res.status(200).json({
                 cars:result
             });
          } 
          else
          {
              res.status(200).json({
                  msg:'Not data available'
              });
          }
        }
        else
        {
           res.status(401).json({
               msg:'error occured',
               error:err
           });
        }
    });
});
app.delete('/:id',(req,res)=>{
     const {id}=req.params;
     let sql='DELETE from cars where id=?';
     let query=db.query(sql,[id],(err,result)=>{
         if(err)
         {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
         }
         else
         {
           res.status(200).json({
               msg:'car deleted'
           });
         }
     });
});
app.put('/:id',(req,res)=>{
     const {id}=req.params;
     const {name,model,company}=req.body;
     let data=[name,model,company,id];
     let sql='update cars set Name=?,Model=?,Company=? where id=?';
     let query=db.query(sql,data,(err,result)=>{
         if(err)
         {
            res.status(401).json({
                msg:'Error occured',
                error:err
            });
         }
         else
         {
             res.status(200).json({
                 msg:'Car updated'
             });
         }
     });
});
app.listen(PORT,()=>{
  console.log('server started');
});