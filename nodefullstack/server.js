const express=require('express');
const car=require('./routes/carFunctions');
const company=require('./routes/companyFuncitons');
const routes=require('./routes/index');
const flash=require('connect-flash');
const exphbs=require('express-handlebars');
const session=require('express-session');
const path=require('path');
const db=require('./config/database');
const PORT=8080||process.env.PORT;
const app=express();
db.connect(err=>{
    if(err)throw err;
    console.log('database connected');
});
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','handlebars');
app.use(session({cookie:{maxAge:6000},
 secret:'jackward',
 resave:false,
 saveUninitialized:false
}));
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/company',company);
app.use('/car',car);
app.use('/',routes);
app.listen(PORT,()=>{
    console.log('server started on '+PORT);
});