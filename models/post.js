var mangoose = require('mongoose');
var Schem = mangoose.Schema;

var schem = new Schem({
    title: {
        type: String,
        require: true
    },
    body:{
        type: String
    }
},{
    timestamps: true
});

schem.set('toJSON',{
    virtual: true
});

module.exports = mangoose.model('Post',schem);