const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const about = require('./routes/api/about');
const services = require('./routes/api/services');
const blogs = require('./routes/api/blogs');
const contact = require('./routes/api/contact');

app.use('/api/about', about);
app.use('/api/services', services);
app.use('/api/blogs', blogs);
app.use('/api/contact', contact);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
