const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override')
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const db = require("./config/db")
const route = require("./routes")

// Connect to db
db.connect();

app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Khai báo cho app biết sử dụng handlebars engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
   }
  })
);

// set engine vào app
app.set("view engine", "hbs");

app.use(methodOverride('_method'))

// set đường dẫn trỏ đến folder views
app.set("views", path.join(__dirname, "resources", "views"));

route(app);


app.listen(port, () => {
  console.log(`App app listening on port ${port}`);
});
