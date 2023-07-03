import mongoose from "mongoose";

const connection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connection established...");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
export default connection;
