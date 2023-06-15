const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        validate: {
            validator: function(value){
                return this.repeatPassword == value;
            },
            message: 'Pssword missmatch!'
        }
    },
});
 const User  = mongoose.model('User', userSchema);

 module.exports = User;
  