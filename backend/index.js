
import 'dotenv/config';
import cors from 'cors'


import express from 'express'

const app = express();

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, 
}));

import aiRoute  from './routes/aiRoute.js'

app.use('/api/v1/ai',aiRoute)

app.listen(PORT,()=>{
    console.log(`server listning on ${PORT}`);
})





