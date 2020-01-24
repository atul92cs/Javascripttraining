const express=require('express');
const car=require('./routes/carFunctions');
const company=require('./routes/companyFuncitons');
const routes=require('./routes/index');
const flash=require('connect-flash');
const exphbs=require('express-handlebars');
const session=require('express-session');
const path=require('path');
const cookieParser=require('cookie-parser');
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
app.use(cookieParser('keyboard cat'));
app.use(session({cookie:{maxAge:null},
 secret:'jackward',
 resave:false,
 saveUninitialized:false
}));
app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message;
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/company',company);
app.use('/car',car);
app.use('/',routes);
app.listen(PORT,()=>{
    console.log('server started on '+PORT);
});