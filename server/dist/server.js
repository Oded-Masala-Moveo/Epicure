"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const exceptions_1 = require("./exceptions");
const routes_1 = require("./routes");
dotenv_1.default.config();
require("./config/config");
require("./process");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: '50mb', extended: true }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use((0, express_session_1.default)({
    secret: "epicure",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
app.use("/api", routes_1.apiRouter);
app.use(exceptions_1.ErrorHandler.handleError);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=server.js.map