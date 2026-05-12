import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type:String , required : true},
    number:{type:Number , required :true},
    email:{type:String , required :  true},
});
const User= mongoose.models.user || mongoose.model("user", UserSchema);

export default User;