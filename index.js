const express = require("express");
const port = 9000;

const app = express();

app.listen(port, function(err)
{
    if(err)
    {
        console.log("An error occured while firing up server");
        return;
    }
    console.log("The Server is live on port:" , port);
});


// use express router 
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");


