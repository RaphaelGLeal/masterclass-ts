import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('Raphael Leal');
})

app.listen(3333);