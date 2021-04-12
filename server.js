const express = require('express');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');



app = express();

app.use(express.urlencoded({extended: false})); /// parsing request bodies
app.use(express.static('public'));

app.use(userRoutes);
app.use('/admin' , adminRoutes);


app.listen(3000); // actually runs here and starts accepting the requests
