import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.routes.js';
import companyRoute from './routes/company.routes.js';
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';
import path from 'path';

dotenv.config();

connectDB();
const PORT = process.env.PORT || 3000;
const app = express();

const _dirname=path.resolve();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Corrected CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173',  // Changed to HTTP for local development
    credentials: true,
};

app.use(cors(corsOptions));



// APIs
app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend", "dist", "index.html"));
})

// Start the server
app.listen(PORT, () => {
     // Ensure the database connection is established
    console.log(`Server running at port ${PORT}`);
});
