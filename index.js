const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const cookieParser = require("cookie-parser");
const { ErrorHandler, NoDataFound, handleError } = require("./helper/error");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

dotenv.config({
  path: ".env",
});
app.use("/api", routers);

app.use(function (req, res, next) {
  next(new ErrorHandler(404, 'Page not found'));
})

app.use((err, req, res, next) => {
  if (err.constructor === ErrorHandler) {
    handleError(req,res,err)
  }
  else if (err.constructor === NoDataFound) {
    handleError(new ErrorHandler(400, 'Not found'), res)
  }
  else if (err.code === 'ECONNREFUSED') {
    handleError(new ErrorHandler(503, `${err.address}:${err.port} refused connection`), res)
  }
  else {
    handleError(new ErrorHandler(500,  'Internal Server Error'), res)
  }
})

var port = process.env.PORT || "5055";

app.listen(port);
console.log("App Start", port);
