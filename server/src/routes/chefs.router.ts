import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
// router.get("/:id", (req, res) => {
//   res.send("Hello World");
// });
// router.put("/updateChef/:id", (req, res) => {
//   res.send("Hello World");
// });
// router.delete("/deleteChef/:id", (req, res) => {
//   res.send("Hello World");
// });
// router.post("/addChef", (req, res) => {
//   res.send("Hello World");
// });



export default router;