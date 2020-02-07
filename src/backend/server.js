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

app.get('/data/getfib', function (req, res) {

    let rn = randomInteger(34,43);

    let str = 'Число Фибоначчи '+rn+' = '+fib(rn);

    console.log('str: ',str);

    res.send(JSON.stringify({text: str}));
});


app.get('/data/gettable', function (req, res) {

    const table = [
        {fruit: 'apple',  color: 'green', 'price': '1.30'},
        {fruit: 'orange', color: 'orange', 'price': '2.10'},
        {fruit: 'plum',   color: 'yellow', 'price': '3.00'}
    ];

    setTimeout(()=>{
        res.send(JSON.stringify({table: table}));
    },4000);

    
});
  
app.listen(port, () => console.log('Example app v1 listening on port '+port+'!'));