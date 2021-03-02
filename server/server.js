const express = require('express');
const path = require('path');
const authRouter = require('./routers/authRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/auth', authRouter);


app.listen(PORT, () => console.log(`App is running on ${PORT}... `));