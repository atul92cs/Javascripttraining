const db=require('../config/database');
const express=require('express');
const flash=require('connect-flash');
const router=express.Router();

router.post('/create',(req,res)=>{
    const {name,origin}=req.body;
    let body={Name:name,Origin:origin};
    let sql='insert into companies set ?';
    let query=db.query(sql,body,(err,result)=>{
        if(err)
        {
            req.session.message={
                  info:'Error occured',
                  type:'danger'
            };
            res.redirect('/add/company');
          
        }
        else
        {
            req.session.message={
                type:'success',
                info:'Company created'
            };
            res.redirect('/add/company');
           
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name,origin}=req.body;
    let sql='update company set Name=?,Origin=? where id=?';
    let body=[name,origin,id];
    let query=db.query(sql,body,(err,result)=>{
        if(err)
        {
            req.session.message={
                type:'danger',
                info:'error occured'
            };
            console.log(err);
        }
        else
        {
             req.session.message={
                 type:'success',
                 info:'company added'
             };    
         }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from company where id=?';
    let data=[id];
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
                msg:'company deleted'
            });
        }
    });
});

module.exports=router;