//dependencies
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')


//define the express operation
const app=express();
const port=3000;


//defining the cors -cross origin by reciving the data in json format
app.use(cors());
app.use(bodyParser.json())



//establish the connection with the dB
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'db2'    
    });
    



//verifying whether db is connected or not
db.connect(err=>{
    if(err){
        console.error('connection is not established with the dB',err);
    }
    else{
        console.log('Connected to db')
    }
    
    
    });


app.listen(port,()=>{console.log('server port estbalished on 3000')})


//to insert client into db
app.post('/CreateClient',(req,res)=>{
    
    const {
        name,Email,Address,Password,RPassword}=req.body;
    const sql='insert into client values(?,?,?,?,?)';
    console.log(req.body)
    console.log('this is server')
   db.query(sql,[name,Email,Address,Password,RPassword],(err,result)=>{
       if(err){
         console.error('Error in adding the Client',err);
            res.status(500).json({error:'An error occured'});
        }else{
           res.status(200).json({message:'Client Registered Successfully'});
        }
    });
   });   

   //to insert Meeting into db
app.post('/CreateMeeting',(req,res)=>{
    const {
        topic,People,datetimer}=req.body;
    const sql='insert into meeting values(?,?,?)';
    console.log(req.body)
    console.log('this is server')
   db.query(sql,[topic,People,datetimer],(err,result)=>{
       if(err){
         console.error('Error in adding the meeting',err);
            res.status(500).json({error:'An error occured'});
        }else{
           res.status(200).json({message:'Meeting Scheduled Successfully'});
        }
    });
   });   