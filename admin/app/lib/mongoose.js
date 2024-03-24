import mongoose from "mongoose";

export default function mongooseConnect() {
  const uri = process.env.DB_CONNECTION_STRING;
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return mongoose.connect(uri);
  }
}
