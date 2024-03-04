import express from 'express';
import open from 'open';
const app = express();
const port = 3000;


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`My Tech Blog listening at http://localhost:${port}`);
    open(`http://localhost:${port}`);
})

