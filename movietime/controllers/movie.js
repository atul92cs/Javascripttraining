const express=require('express');
const router=express.Router();
const db=require('../config/database');
router.post('/add',(req,res)=>{
    let {name,year}=req.body;
    let body={name:name,year:year};
     let sql='insert into movie set ?';
     db.query(sql,body,(err,result)=>{
         if(err)
         {
            res.status(401).json({
                msg:'error occrued',
                error:err
            });
         }
         else
         {
            res.status(200).json({
                msg:'data inserted'
            });
         }
     });
   
});
router.get('/',(req,res)=>{
    let sql='select * from movie';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                movies:result
            });
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
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let sql='delete from movie where id =?';
    let body =[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'movie deleted'
            });
        }
        else
        {
            res.status(401).json({
                msg:'error occrued',
                erorr:err
            });
        }
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name,year}=req.body;
    let sql='update movie set name=?,year=? where id =?';
    let body=[name,year,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'movie details have been updated'
            });
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
module.exports=router;