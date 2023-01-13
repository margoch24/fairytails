
module.exports = function forbidden (err) {
  // Get access to `res`
  var res = this.res;

  // Send status code and "Forbidden" message
  return res.sendStatus(403);

};
