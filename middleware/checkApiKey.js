function checkApiKey(req, res, next) {
  const apiKey = req.headers['api_key'];
  if (!apiKey || apiKey !== '12345678') {
    return res.status(403).json({
      error: 'not autorize'
    })
  }
  next()
}

module.exports = checkApiKey