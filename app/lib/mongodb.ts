
import mongoose from 'mongoose'
const mongodb = async () => {
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/Details');
            console.log('database connected sucess');
        }
        catch(err){
            console.log("Database error ",err)
        }
};
export default mongodb

