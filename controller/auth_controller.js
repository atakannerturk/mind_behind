
const {tryLogin} = require("../repository/auth");
const { ErrorHandler } = require("../helper/error");
const {generateToken} = require("../middleware/jwt_middleware")
  
const login = async (req, res, next) => {
    try {
      const data = await tryLogin(req.body.user_name,req.body.password);
      const token = generateToken({ 'id': data.id ,'password':data.password});
      req.user = data    
      return res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({jwtToken:token, role : data.role,id:data.id}); 
    } catch (error) {
      next(new ErrorHandler(error.status || 404, error.message));
    }
  };
  const logout = async (req, res, next) => {
    try {
       return res
       .clearCookie("access_token")
       .status(200)
       .json({ message:("Logout Succes")+" 😏 🍀" });
    } catch (error) {
      return next(new ErrorHandler(error.status || 404, error.message));
    }
  };
  module.exports = {
    login,
    logout
  };


