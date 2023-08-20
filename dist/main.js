"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_js_1 = __importDefault(require("./router/book.js"));
require("dotenv/config");
const checker_js_1 = require("./middleware/checker.js");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 2077;
app.use(express_1.default.json());
app.use('/', checker_js_1.methodChecker);
//app.use('/',checkToken);
app.use('/', book_js_1.default);
app.use((req, res) => {
    res.status(404).send("You requested something does not exist :(");
});
app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});
