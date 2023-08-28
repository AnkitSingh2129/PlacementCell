
const express = require('express');
const port = 8000;
const app = express();








app.listen(port, (error)=> {
    if(error){
        console.log(`Error in connecting to the port ${port}`);
    }

    console.log(`Server is listening on the port ${port}`);
})