import express from "express";
import { v1Router } from "../../routes";

const apiRouter = express.Router();

apiRouter.get("/v1/test", (req, res) => {
    res.send("server is running");
  });
apiRouter.use("/v1", v1Router);


export default apiRouter;
