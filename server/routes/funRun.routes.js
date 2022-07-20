const FunRunController = require("../controllers/funRun.controller");

module.exports =(app) => {
 
 app.post("/api/funRuns", FunRunController.createFunRun)
 app.get("/api/funRuns", FunRunController.getAllFunRuns)
 app.get("/api/funRuns/:id", FunRunController.getOneFunRun)
 app.put("/api/funRuns/:id", FunRunController.updateFunRun)
 app.delete("/api/funRuns/:id", FunRunController.deleteFunRun)
}