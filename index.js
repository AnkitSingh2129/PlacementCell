
const express = require('express');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');


app.use(express.urlencoded({ extended: true }));


app.use(express.static('./assets'));

app.use(expressLayouts);
//Set Up - Extract Styles from Sub Pages into the Layout.
app.set("layout extractStyles", true);
//Set Up - Extract Scripts from Sub Pages into the Layout.
app.set("layout extractScripts", true);
// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");


app.use('/', require('./routes/index'));


app.listen(port, (error)=> {
    if(error){
        console.log(`Error in connecting to the port ${port}`);
    }

    console.log(`Server is listening on the port ${port}`);
})