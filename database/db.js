import mongoose from 'mongoose'

const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.ai6a2vo.mongodb.net/`
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(URL);
        console.log('Connection with database successfull');
    } catch (error) {
        console.log('Error with connection with db',error);   
    }
}

export default Connection;
// /ml1QbrVdDnpbqFdS