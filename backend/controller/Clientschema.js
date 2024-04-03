const mongoose = require('mongoose');

const clientSchema =mongoose.Schema({
    Name :{ type: String},
    Email :{ type: String, required: true},
    Password:{ type: String},
    Place:{ type: String},
    Phone:{ type: String, required: true},
    Profile: {type:Array},

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;