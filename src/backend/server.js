import express from 'express';
const app = express();
const port = 3443;

const fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getfib', function (req, res) {

    let rn = randomInteger(34,42);

    let str = 'Число Фибоначчи '+rn+' = '+fib(rn);



    res.send(JSON.stringify({text: str}));
});
  
app.listen(port, () => console.log('Example app listening on port '+port+'!'));