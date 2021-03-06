const db=require('../config/database');
const express=require('express');
const router=express.Router();
const flash=require('connect-flash');

router.post('/add',(req,res)=>{
    const {name,model,company}=req.body;
    let body={Name:name,Model:model,Company:company};
    let sql='insert into cars set ?';
    let query=db.query(sql,body,(err,result)=>{
        if(err)
        {
          req.session.message={
              type:'danger',
              info:'error occured'
          };
          console.log(err);
          res.redirect('/add/car');
        
        }
        else
        {
           req.session.message={
               info:'success',
               info:'Car created'
           };
           res.redirect('/add/car');
          
        }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from cars where id =?';
     let query=db.query(sql,[id],(err,result)=>{
         if(err)
         {
           res.status(401).json({
               message:'error occured',
               error:err
           });
         }
         else
         {
              res.status(200).json({
                  message:'car deleted'
              });
         }
     });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name,company,model}=req.body;
    let sql='update cars set Name=?,Model=?,Company=? where id=?';
    let data=[name,model,company,id];
    let query=db.query(sql,data,(err,result)=>{
        if(err)
        {
          req.session.message={
              type:'error',
              info:'error occured'
          };
          res.redirect('');
        }
        else
        {
          res.status(200).json({
              message:'Car updated'
          });
        }
    });
});
module.exports=router;