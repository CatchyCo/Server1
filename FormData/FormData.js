const mongoose = require("mongoose");

const formScheme = mongoose.Schema({

    FData : [Cname="",Ccode =""]
});

module.exports = mongoose.model('FormData',formScheme);