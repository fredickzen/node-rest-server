// PUERTO
process.env.PORT = process.env.PORT || 4000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// BASE DE DATOS

let urlDB;

if (process.env.NODE_ENV === "dev") urlDB = "mongodb://localhost:27017/cafe";
else
    urlDB =
        "mongodb+srv://freddy:YGMIFMBVmrcSySDW@cluster0.jgmmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

process.env.URL_DB = urlDB;