const ErrorHandler = class extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  };
  const NoDataFound = class extends Error {
    constructor() {
      super("Informatıon not found");
    }
  };
  const handleError = (req, res, err) => {
    let { statusCode, message } = err;
    message = message.toString();
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  };
module.exports = {
    ErrorHandler,
    NoDataFound,
    handleError,
  };
  