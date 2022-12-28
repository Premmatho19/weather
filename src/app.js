const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express();

const port = process.env.PORT || 3000

// public static path

console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));



// routing
app.get("", (req, res)=>{
res.render("index")
})

app.get("/about", (req, res)=>{
res.render("about")
})

app.get("/weather",(req, res)=>{
    res.render("weather")
})

app.get("/weather", (req, res)=>{
res.render("Welcome to Prem Tech Channel Weather Page")
})

app.get("*", (req, res)=>{
res.render("404error", {
    errorMsg : "Opps Error Page Not Found"
})
})


app.listen(port, ()=>{
    console.log(`Listening to the http://localhost:${port}`)
})