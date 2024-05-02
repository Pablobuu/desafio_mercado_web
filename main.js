import express from "express";
import exphbs from "express-handlebars";
import path from "path";

const app = express();
const PORT = 3000;

const __dirname = path.resolve();

app.use(express.static("assets"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({ layoutsDir: __dirname + "/views", extname: "hbs" })
);

app.use("/bootstrap", express.static("node_modules/bootstrap/dist/css"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "productos",
    producto: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
