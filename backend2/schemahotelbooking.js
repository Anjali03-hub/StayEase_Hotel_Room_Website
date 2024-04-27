const mongoose=require('mongoose');
const schema=mongoose.Schema

let hotelbooking =new schema({

     fullname:{
        type:String
    },
    
    gmailid:{
        type:String
    },

    mobileno:{
        type:String
    },
    checkoutdate:{
        type:String
    },
    checkindate:{
        type:String
    },
    child:{
        type:String
    },
    adult:{
        type:String
    },
    aadhar:{
        type:String
    },


},
{
    collection:'Hotelbookings'
}

)
module.exports=mongoose.model("Hotelbookings",hotelbooking)