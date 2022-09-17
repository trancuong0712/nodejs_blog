const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

      app.use(express.static(path.join(__dirname, 'public')));

      // Khai báo cho app biết sử dụng handlebars engine
      app.engine(
          'hbs',
          engine({
              extname: '.hbs',
          }),
      );

// set engine vào app
app.set('view engine', 'hbs');

// set đường dẫn trỏ đến folder views
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
