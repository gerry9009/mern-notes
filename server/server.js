"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var PORT = 8000;
app.get("/", function (req, res) {
    res.send("Server is running");
});
app.listen(PORT, function () {
    console.log("Server is running on ".concat(PORT, " port"));
});
