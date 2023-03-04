let express = require("express");
let cors = require('cors')
let  app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/url", (req,res,next) => res.json(["Paris", "Barcelona", "Barranquilla", "Montevideo", "Santiago de Chile","Mexico DF", "New York"]));

let misDestinos = [];
app.get("/my", (req,res,next) => res.json(misDestinos));

app.post("/my", (req,res,next) => {

    console.log(req.body);
    //misDestinos = req.body;
    misDestinos.push(req.body)

    res.status(200).send(req.body);
});

app.get("/api/translation", (req, res, next) => res.json([
    {lang: req.query.lang, key: 'HOLA', vlaue: 'HOLA' + req.query.lang}
]));