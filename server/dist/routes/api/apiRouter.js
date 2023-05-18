"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("../../routes");
const apiRouter = (0, express_1.Router)();
apiRouter.get("/v1/test", (req, res) => {
    res.send("server is running");
});
apiRouter.use("/v1", routes_1.v1Router);
exports.default = apiRouter;
//# sourceMappingURL=apiRouter.js.map