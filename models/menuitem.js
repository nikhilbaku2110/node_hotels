const mongoose = require("mongoose");

const menuitemschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    taste:{
        type:String,
        enum:["spicy","sweet","sour"],
        require:true
    },
    isdrink:{
        type:Boolean,
        default:false
    },
    ingredints:{
        type:[String],
        default:false
    },
    numsales:{
        type:Number,
        default:false
    },
});

const menuitem = mongoose.model("menu",menuitemschema)

module.exports=menuitem
