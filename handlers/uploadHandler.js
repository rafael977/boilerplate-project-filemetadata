function uploadHandler(req, res) {
  let { originalname, mimetype, size } = req.file;
  res.json({
    name: originalname,
    type: mimetype,
    size,
  });
}

module.exports = uploadHandler;
