const express = require('express');
const app = express();
const doenv = require('dotenv');
const cors = require('cors');
const dbconnect = require('./config/DBConnection');
const router = require('./Routes/routes');
const CookiePaser = require("cookie-parser");
const router2 = require('./Routes/apiroutes');
const router3 = require('./Routes/paymentroutes');
doenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ['http://13.49.73.215:5173' ,'http://shivamwallu.site','http://13.49.73.215','http://localhost:5173','https://shivamwallu.site','https://shivamwallu.site/api' ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(CookiePaser());

dbconnect();

app.use('/img', express.static('./img')); 
app.use("/users" , router );
app.use("/api" , router2)
app.use('', router3 )
app.use((err , req , res , next)=>{
    console.log(err);
    res.status(500).json({
        message: "Internal server error",
        error: err.message,
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT || 5000}`);
})


