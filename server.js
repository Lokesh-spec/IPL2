const express = require("express");
const fs = require('fs');
const app = express();
const File = JSON.parse(fs.readFileSync('./public/numberOfMatchesPlayedInEachStadium.json', "utf-8"));
app.use(express.static("public"));


app.get("/season/:year", (req, res) => {
    const year = req.params.year;
    const data = File.numberOfMatchesPlayedInEachStadium[year];
    // console.log(year);
    res.send(data); 
});


app.listen(3000, () => {
    console.log("Server running in port 3000.....");
});