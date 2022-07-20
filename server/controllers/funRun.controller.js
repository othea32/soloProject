const FunRun = require("../models/funRun.model");

module.exports = {

  createFunRun: (req, res) => {
    FunRun.create(req.body)
      .then((newFunRun) => {
        console.log(newFunRun)
        res.json(newFunRun)
      })
      .catch((err) => {
        res.status(400).json({err})
      });
  },

  getAllFunRuns: (req, res) => {
    FunRun.find({})
      .then((allFunRuns) => {
        console.log(allFunRuns)
        res.json(allFunRuns)
      })
      .catch((err) => {
        res.status(400).json({err})
      });

  },

  getOneFunRun: (req, res) => {
    FunRun.findOne({_id: req.params.id})
      .then((oneFunRun) => {
        console.log(oneFunRun)
        res.json(oneFunRun)
      })
      .catch((err) => {
        res.status(400).json({err})
      });
  },

  updateFunRun: (req, res) => {
    FunRun.findOneAndUpdate({_id: req.params.id},
      req.body,
      {new: true, runValidators: true})
      .then((updatedFunRun) => {
        console.log(updatedFunRun)
        res.json(updatedFunRun)
      })
      .catch((err) => {
        res.status(400).json({err})
      });
  },

  deleteFunRun: (req, res) => {
    FunRun.deleteOne({_id: req.params.id})
      .then((deletedFunRun) => {
        console.log(deletedFunRun)
        res.json(deletedFunRun)
      })
      .catch((err) => {
        res.status(400).json({err})
      });
  },
  
}

