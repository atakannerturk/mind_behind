
const {get_all_branch,update_branch} = require("../repository/branch");
const { ErrorHandler } = require("../helper/error");

const getAllbranch = async (req, res, next) => {
    try {
      var response = await get_all_branch();   
      res.json(response);
    } catch (error) {
      next(new ErrorHandler(error.status || 404, error.message));
    }
  };
  const updateBranch = async (req, res, next) => {
    try {
      const updated_values ={
        id : req.query.id,
        ...req.body
      }
      await  update_branch(updated_values);
      res.status(200).json({
        message:"Branch Updated",
      });

    } catch (error) {
      next(new ErrorHandler(error.status || 404, error.message));
    }
  };
  
  module.exports = {
    getAllbranch,
    updateBranch
  };
  