const mongo = require('mongoose');


var schema = new mongo.Schema({
    expireAt: { 
        type: Date,
        required : "Required"
    },
    task_name : {
        type : String,
        required : "Required"
    },
    task_desc : {
        type : String,
        required : "Required"
    },
    task_creator : {
        type : String,
        required : "Required"
    },
    task_duration : {
        type : String,
        required : "Required"
    },
    task_createdAt : {
        type : Date,
        required : "Required"
    }
});
schema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
module.exports=mongo.model("add",schema)
