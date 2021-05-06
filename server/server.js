require("./config/config");
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.URL_DB,  {useNewUrlParser: true, useUnifiedTopology: true}, (err, resp) => {
    if(err) throw err;

    console.log("Base de datos online")
});

const express = require("express");
const app = express();

// parse application/json
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(require('./routes/usuario'))


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto "+ process.env.PORT);
});
