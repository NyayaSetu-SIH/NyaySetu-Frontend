import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport';
import cookieSession from 'cookie-session';
import passportSetup from "./passport.js"
import authRoute from "./routes/auth.js"


const app = express();
dotenv.config();

const PORT = 8000;

app.use(
    cookieSession({
        name:"session",
        keys:["NyaySetu"],
        maxAge:24*60*60*100,
    })
)
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods:"GET,PUT,POST,DELETE",
        credentials:true
    })
)

app.use("/auth",authRoute)

app.listen(PORT, 
  () => {
    console.log(`Server is running on PORT ${PORT}`);
  }
)
