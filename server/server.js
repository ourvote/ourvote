const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
// console.log(process);
// const apiKey = process.env.CIVIC_INFO;

app.use(express.json());


app.use('/build', express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../client')));

app.listen(PORT, () => console.log(`App is running on ${PORT}... `));