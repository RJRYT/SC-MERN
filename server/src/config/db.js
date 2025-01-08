import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...  good to go");
  } catch (error) {
    console.log("error connecting to MongoDB", error);
  }
};
