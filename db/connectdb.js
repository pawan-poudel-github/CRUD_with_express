import mongoose from 'mongoose'

mongoose.set('strictQuery', false);

const connectDB = async (DB_URL) => {
    try {
        const options = {
            dbName: "school" //DATABASE NAME
        }
        await mongoose.connect(DB_URL, options);
        console.log("✅ DB connected Succesfully ")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;