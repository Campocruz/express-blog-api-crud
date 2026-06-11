function logRequest(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip}`);

  next()
}

module.exports = logRequest