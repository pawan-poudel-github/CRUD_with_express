import express from 'express';
import {join} from 'path'
// importing DB connector function 
import connectDB from "./db/connectdb.js"
import router from './routes/index.js';
// if  port and databaseURL is not defined in .env then value after || will be assigned to variable 
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"  //default url of mongo db 

const app = express();
// to use static files available in views/public like CSS, image ,js etc 
app.use(express.static(join(process.cwd(),'public'))) // the cwd method returns the directory in which nodejs is running


//setting default view engine -> ejs
app.set('view engine','ejs')
//connecting database with url parameter
connectDB(DATABASE_URL)

// to get the data from form 
app.use(express.urlencoded({extended:false}))

//rendering files
app.use('/',router)

app.listen(port, () => {
    console.log(`✅ Express server listening on http://localhost:${port}`);
});
