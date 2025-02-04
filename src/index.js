import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedheaders: ['Content-Type']
};

import * as routes from './routes/route.js';

const port = process.env.APP_PORT || 3000;
const app = express();

// App level middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions)); // enable CORS.

// Register routes.
app.use('/api', routes.default);

app.get('/home',(_req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));