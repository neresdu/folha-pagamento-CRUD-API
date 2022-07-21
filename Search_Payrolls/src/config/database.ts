import mongoose, { connect } from 'mongoose';

 function connectDB(){

  const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false,
    dbName: "Payroll"
    
  };
  mongoose.connect(process.env.DB_CONN_STRING + '',MONGO_OPTIONS).then(result =>{
    console.log("Connect to mongoDb")
  })
 }
export { connectDB };