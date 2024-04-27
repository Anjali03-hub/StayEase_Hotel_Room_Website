const mongoose = require('mongoose');
const express =require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const regdata=require("../backend2/schema");
const hotelbooking=require("../backend2/schemahotelbooking")
const usermessage=require("../backend2/schemausermessage")
 mongoose.connect('mongodb://0.0.0.0:27017/hotel')
.then((x) => {

console.log(`data base connect to :"${x.connections[0].name}"`)
})

app.post('/regdata',(req,res)=>
{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email1=req.body.email1;
    const mobileno=req.body.mobileno;
    const birthdate=req.body.birthdate;
    const gender=req.body.gender;
    const address=req.body.address;
    const password1=req.body.password1;
    const confirm=req.body.confirm;

    const data=new regdata({
        firstname:firstname,
        lastname:lastname,
        email1:email1,
        mobileno:mobileno,
        birthdate:birthdate,
        gender:gender,
        address:address,
        password1:password1,
        confirm:confirm,
    });
    console.log(data);
    data.save()
    .then(x=>{
        res.send('record save');
    })

});



app.post('/hotelbooking', (req, res) => {
    const fullname = req.body.fullname;
    const gmailid = req.body.gmail;
    const checkindate = req.body.checkindate;
    const checkoutdate = req.body.checkoutdate;
    const child = req.body.child;
    const adult = req.body.adult;
    const aadhar = req.body.aadhar;
    const mobileno = req.body.mobileno;
    const data = new hotelbooking({
        fullname: fullname,
        gmailid: gmailid,
        checkindate: checkindate,
        checkoutdate: checkoutdate,
        child: child,
        adult: adult,
        aadhar: aadhar,
        mobileno: mobileno,
    });
    console.log(data);
    data.save()
        .then(x => {
            res.send('record save')
        })
});


app.post('/usermessage',(req,res)=>
{ const name = req.body.name;
    const email=req.body.email;
    const message=req.body.message;
    const data=new usermessage({
        name:name,
        email:email,
        message:message,
    })
    console.log(data);
    data.save()
        .then(x => {
            res.send('record save')
        })

})



app.get("/viewuser",(req,res)=>
{
regdata.find({})
.then(result=>res.json(result))
.catch(err=>console.log(err));
})


app.delete("/deleteuser/:id",(req,res)=>
{
    const id=req.params.id;
    regdata.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
}
)


app.get("/viewbooking",(req,res)=>
{
    hotelbooking.find({})
.then(result=>res.json(result))
.catch(err=>console.log(err));
})


app.delete("/deletebooking/:id",(req,res)=>
{
    const id=req.params.id;
    hotelbooking.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
}
)


app.get("/viewcontact",(req,res)=>
{
    usermessage.find({})
.then(result=>res.json(result))
.catch(err=>console.log(err));
})


app.delete("/deletecontact/:id",(req,res)=>
{
    const id=req.params.id;
    usermessage.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
}
)


app.get('/',(req,res)=>{
    res.send('serverstarted on port ');
});



app.listen(8000, () => {

    console.log("server started on port 8000");
    
    }) 
