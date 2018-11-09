const express = require('express');
const path = require('path');
const app = express();

const users =  [
    {
        "_id": "5be4de39ae7d682c5a6005d4",
        "email": "meredith@localhost.io ",
        "first_name": "Lynda",
        "last_name": "Ford",
        "zip": 7031,
        "state": "Kentucky",
        "age": 20
    },
    {
        "_id": "5be4de390f3d10a34cbf3068",
        "email": "katy@localhost.io ",
        "first_name": "Tran",
        "last_name": "Todd",
        "zip": 8935,
        "state": "Guam",
        "age": 34
    },
    {
        "_id": "5be4de396794802df2e94ec7",
        "email": "perry@localhost.io ",
        "first_name": "Stephenson",
        "last_name": "Oneill",
        "zip": 6238,
        "state": "Maine",
        "age": 28
    },
    {
        "_id": "5be4de395ca0cfc787cdd683",
        "email": "adkins@localhost.io ",
        "first_name": "Mcpherson",
        "last_name": "Richards",
        "zip": 6502,
        "state": "New Hampshire",
        "age": 32
    },
    {
        "_id": "5be4de39bc4ad26b01bf068e",
        "email": "dora@localhost.io ",
        "first_name": "Preston",
        "last_name": "Dina",
        "zip": 7536,
        "state": "Louisiana",
        "age": 21
    },
    {
        "_id": "5be4de39e951444d2dee5fb6",
        "email": "lesley@localhost.io ",
        "first_name": "Leanne",
        "last_name": "Eliza",
        "zip": 4588,
        "state": "Mississippi",
        "age": 23
    },
    {
        "_id": "5be4de39a75db2f89023294d",
        "email": "graham@localhost.io ",
        "first_name": "Alisa",
        "last_name": "Leonor",
        "zip": 6895,
        "state": "California",
        "age": 26
    },
    {
        "_id": "5be4de390bd830fe0571f516",
        "email": "corine@localhost.io ",
        "first_name": "Martin",
        "last_name": "Joyce",
        "zip": 5193,
        "state": "Massachusetts",
        "age": 21
    },
    {
        "_id": "5be4de39024d49d290f52117",
        "email": "buckner@localhost.io ",
        "first_name": "Gabriela",
        "last_name": "Holden",
        "zip": 5143,
        "state": "Pennsylvania",
        "age": 27
    },
    {
        "_id": "5be4de3925d24253d2c2a885",
        "email": "nielsen@localhost.io ",
        "first_name": "Olga",
        "last_name": "Chen",
        "zip": 5291,
        "state": "New Jersey",
        "age": 35
    },
    {
        "_id": "5be4de39fd136bf579019702",
        "email": "lewis@localhost.io ",
        "first_name": "Alvarado",
        "last_name": "Lakisha",
        "zip": 8172,
        "state": "Nebraska",
        "age": 22
    },
    {
        "_id": "5be4de3911272967d30ac68e",
        "email": "vang@localhost.io ",
        "first_name": "Dona",
        "last_name": "Betsy",
        "zip": 5577,
        "state": "Colorado",
        "age": 29
    },
    {
        "_id": "5be4de394d824966889d9d8d",
        "email": "wolfe@localhost.io ",
        "first_name": "Little",
        "last_name": "Goodwin",
        "zip": 4576,
        "state": "Oregon",
        "age": 29
    },
    {
        "_id": "5be4de39a78d534af00edcc3",
        "email": "macias@localhost.io ",
        "first_name": "Lelia",
        "last_name": "Boyd",
        "zip": 4121,
        "state": "Ohio",
        "age": 38
    },
    {
        "_id": "5be4de392d4085ef2c0c6c5f",
        "email": "barnett@localhost.io ",
        "first_name": "Gilbert",
        "last_name": "Selena",
        "zip": 4999,
        "state": "South Dakota",
        "age": 30
    }
];

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/v1/api/users', (req, res) => {
        res.json(users);
});

app.listen(5000, ()=>{
    console.log('App running....');
});