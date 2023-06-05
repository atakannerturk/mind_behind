const { sign, verify } = require("jsonwebtoken");
const { ErrorHandler } = require("../helper/error");
const dotenv = require("dotenv");

dotenv.config({
  path: "../../.env",
});

const expiresIn = "5h"; 

function generateToken(data) {
  const payload = { data: data };
  const options = { expiresIn: expiresIn };
  return sign(payload, process.env.JWT_SECRET_TOKEN, options);
}

function verifyToken(req, res, next) {
  if (!(req.cookies.access_token)) {
    return next(new ErrorHandler(403, 'Please log in'));
  }

  const token = req.cookies.access_token;
  
  verify(token, process.env.JWT_SECRET_TOKEN, async (err, decoded) => {
    if (err) {
      return next(new ErrorHandler(401, 'Token has expired'));
    }
    try {   
      const { id, role } = decoded.data;
      req.user = {
        ...req.user,
        id,
        role
      };
      next();
    } catch (error) {
      return next(new ErrorHandler(500, 'User not found'));
    }
  });
}

module.exports = { 
    generateToken,
    verifyToken,
    verify
 };