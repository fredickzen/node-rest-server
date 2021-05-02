require("./config/config");

const express = require("express");
const app = express();

// parse application/json
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/usuario", function (req, res) {
    res.json("Get usuarios");
});

app.post("/usuario", function (req, res) {
    let body = req.body;
    if (!!!body.nombre)
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        })
    else
        res.json({ persona: body });
});

app.put("/usuario/:id", function (req, res) {
    let id = req.params.id;
    res.json({ id });
});

app.delete("/usuario", function (req, res) {
    res.json("delete usuarios");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto "+ process.env.PORT);
});
