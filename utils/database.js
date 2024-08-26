import mongoose from "mongoose";

//buat cek kalo udah konek atau belum
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'nyontekprompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("mongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}