import dotenv  from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config(
    {
        path:"./.env"
    }
)
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(`ERROR ! ${error}`);
        throw error;
        
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is listing on PORT : ${process.env.PORT}`);
        
    })

})
.catch((error)=>{
    console.log("MONGO DB connection failed..",error);
    
});
