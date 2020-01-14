const express=require('express');
const router=express.Router();
const db=require('../config/database');
const flash=require('connect-flash');

router.get('/',(req,res)=>{
    let sql='select * from cars';
    let query=db.query(sql,(err,response)=>{
        if(err)
        {
           res.render('home',{msg:req.flash('error',err)});
        }
        else
        {
           res.render('home',{cars:response});
        }
    });
});
router.get('/car/:id',(req,res)=>{
    const {id}=req.params;
      let sql='select cars.Name,cars.Model,companies.Name as Company from cars join companies on car.Company=companies.id where id=?';
      let data=[id];
      let query=db.query(sql,data,(err,result)=>{
          if(err)
          {
             res.render('carDetails',{msg:req.flash('error','No data found'),layout:'detail'});
          }
          else
          {
              res.render('carDetails',{car:result,layout:'detail'});
          }
      });
});
router.get('/car/add',(req,res)=>{
    let sql ='select * from cars';
    let query=db.query(sql,(err,result)=>{
        if(err)
        {
            res.render('addCar',{layout:'form',message:req.flash('Error occured')});
        }
        else
        {
              res.render('addCar',{layout:'form',cars:result});
        }
    });
});
router.get('/company/add',(req,res)=>{
   let sql='select * from companies;select * from cars';
   let query=db.query(sql,(err,result)=>{
      if(err)
      {
        res.render('addCompany',{layout:'form',message:req.flash(err)});
      }
      else
      {
        res.render('addCompany',{layout:'form',companies:result[0],cars:result[1]});
      }
   });
});
module.exports=router;