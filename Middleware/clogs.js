const clog = (req, res, next) => {
    const Orange = '\x1b[38;5;205m%s\x1b[0m';
    const yellow = '\x1b[33m';
    const cyan = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${Orange}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${yellow}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${cyan}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  //exports.clog = clog;
  module.exports = clog;