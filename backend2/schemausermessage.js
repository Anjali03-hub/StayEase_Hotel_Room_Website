const mongoose=require('mongoose');
const schema=mongoose.Schema

let usermessage=new schema({

     name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },


},
{
    collection:'UserMessage'
}

)
module.exports=mongoose.model("UserMessage",usermessage)