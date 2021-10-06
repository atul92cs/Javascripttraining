const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    port:'3306',
    database:'movieinfo',
    password:'seed',
    user:'root',
    multipleStatements:'true'
});

db.connect(err=>{
    if(err)
    {
            console.log(err);
    }
    else
    {
            console.log('dtabase connected');
    }
});
module.exports=db;