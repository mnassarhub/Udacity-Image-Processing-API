"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Express And Routes Module
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./Routes/router"));
var app = (0, express_1.default)();
// Create Home Page Route
app.get('/', function (req, res) {
    res.status(200).send("<!DOCTYPE html>\n    <html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\t\t<meta\n\t\t\tname=\"viewport\"\n\t\t\tcontent=\"width=device-width, initial-scale=1.0\"\n\t\t/>\n\t\t<!-- Set Website Styles -->\n\t\t<style>\n\t\t\t* {\n\t\t\t\tpadding: 20px;\n\t\t\t\tmargin: 0px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tfont-size: 30px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: calc(100vw - 80px);\n\t\t\t\theight: calc(100vh - 80px);\n\t\t\t}\n\t\t\th1 {\n\t\t\t\ttext-decoration: underline;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.example {\n\t\t\t\tcolor: #ff0000;\n\t\t\t}\n\t\t</style>\n\t\t<title>Resizing API App</title>\n\t</head>\n\t<body>\n\t\t<div class=\"container\">\n\t\t\t<h1>Welcome To My Resizing API Home Page</h1>\n\t\t\t<p class=\"description\">\n\t\t\t\tTo Resize An Image Please Send A Request With Your Valid\n\t\t\t\tWidth, Heigh And Image Name.\n\t\t\t</p>\n\t\t\t<h3>To Get Valid Request Follow Next Example:</h3>\n\t\t\t<p class=\"example\">\n\t\t\t\tHTTP://localhost:3000/api/imageResize?name={image-name}&width={num\n\t\t\t\t>=1}&height={num >=1}\n\t\t\t</p>\n\t\t</div>\n\t</body>\n    </html>");
});
// Initialize All Routes
app.use(router_1.default);
// Set Server Configuration
var port = process.env.Port || 3000;
app.listen(port, function () {
    return console.log("Server Running On Port: HTTP://localhost:".concat(port));
});
exports.default = app;
