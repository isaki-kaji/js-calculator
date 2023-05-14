const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//ブラウザからのgetリクエストに対して
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//ブラウザからのpostメソッドに対して
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var operator = req.body.operator;
    switch (operator) {
        case "1":
            var result = num1 + num2;
            break;
        case "2":
            var result = num1 - num2;
            break;
        case "3":
            var result = num1 * num2;
            console.log(result);
            break;
        case "4":
            var result = Math.round(num1 / num2);
    }
    // console.log(result);
    res.send("答えは" + result + "です。");
});

app.listen(3000, function () {
    console.log("server is running...");
});