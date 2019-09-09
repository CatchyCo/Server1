const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    dyanmicFormData : [countryName = "",countryCode = "" ]
})

module.exports = mongoose.model('DynamicForm' , formSchema);