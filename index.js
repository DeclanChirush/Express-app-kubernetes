const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send("<h1> #GOHOMEGOTA #GIVEUSOURSTOLENMONEY #UPDATED </h1>");
});

app.listen(port, () => {
    console.log(`Server up and running at ${port}`);
})