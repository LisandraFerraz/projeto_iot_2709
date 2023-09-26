const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const bodyParse = require("body-parser");
const post = require("./models/post");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParse.urlencoded({ extends: false }));
app.use(bodyParse.json());

app.get("/", function (req, res) {
  res.redirect("/consultar");
});

app.get("/consultar", function (req, res) {
  post
    .findAll()
    .then(function (post) {
      res.render("consultar", { post });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/cadastrar", function (req, res) {
  post
    .create({
      umidade: req.body.umidade,
      temperatura: req.body.temperatura,
    })
    .then(function () {
      res.redirect("/consultar");
      // res.send("Dados cadastrados com sucesso.");
    })
    .catch(function (erro) {
      res.send("Falha ao cadastrar: " + erro);
    });
});

app.listen("8081", function () {
  console.log("Servidor ativo.");
});
