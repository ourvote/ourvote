const express = require('express');
const app = express();
const path = require('path');
const authRouter = require('./routers/auth-router');
const searchRouter = require('./routers/search-router');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/build', express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/users', authRouter);
app.use('/politicians', searchRouter);

app.listen(PORT, () => console.log(`App is running on ${PORT}... `));