import mongoose from "mongoose";


mongoose.set('strictQuery', false);

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@curd-mern.sjmlaaa.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser: true });
        console.log("Database has been conected")
    } catch (error) {
        console.log("Error during connecting database", error);
    }
}

export default Connection;