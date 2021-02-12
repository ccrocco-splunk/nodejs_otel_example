const tracer = require('signalfx-tracing').init({
  service: 'my-traced-service',
  url: 'http://localhost:9080/v1/trace',
  accessToken: 'YOUR_ACCESS_TOKEN',
  tags: {environment: 'YOUR_ENV'}
});

const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
