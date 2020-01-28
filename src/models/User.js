import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    phone: String,
    address: String,
    email: { type : String , unique : true },
    password: String,
    securityQuestion: String,
    securityAnswer: String,
    photo: String,
    DoB: { type: Date, default: Date.now }

});


export default mongoose.model('User', userSchema);
