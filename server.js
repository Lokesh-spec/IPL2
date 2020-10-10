const express = require("express");
const fs = require('fs');
const app = express();
const File = JSON.parse(fs.readFileSync('./public/numberOfMatchesPlayedInEachStadium.json', "utf-8"));
const File2 = JSON.parse(fs.readFileSync("./public/mostRunByPlayers.json", "utf-8"));
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.get("/season/:year", (req, res) => {
    const year = req.params.year;
    const data = File.numberOfMatchesPlayedInEachStadium[year];
    // console.log(year);
    res.send(data); 
});

app.get("/mostrun", (req, res) => {
    // console.log(req.query);
    const year = req.query.year;
    const data = File2.mostRunByPlayers[year];
    res.json(data);
});


app.listen(PORT, () => {
    console.log("Server running in port 3000.....");
});