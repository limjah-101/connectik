const express = require('express');
const bodyParser = require('body-parser');

//===================ROUTES=====================//
const users  = require('./routes/api/users');
const profile  = require('./routes/api/profile');
const posts  = require('./routes/api/posts');

const app = express();

//========BODY PARSER MIDDLEWARE========//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//=================DB CONNECTION===============//
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MONGO CONNECTED"))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello again MERN, you\'ve missed me ;-)')
});

//=================MAIN ENDPOINTS==================//
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('HELLO NODE!');
})