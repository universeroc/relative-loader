var path = require("path");
var os = require("os");

module.exports = function(content) {
  const defaultConfig = {
    relativePath: undefined
  };

  const config = Object.assign(defaultConfig, this.query);
  const fileName = path.basename(this.resourcePath);

  this.addDependency(this.resourcePath);

  if (!config.relativePath)
    throw new Error("relativePath should not be defined!")

  if (os.platform() === 'win32') {
    config.relativePath = config.relativePath.replace(/\\/g, '\\\\\\\\')
  }

  let filePath = config.relativePath + fileName
  return (
    "try { global.process.dlopen(module, __dirname + '" +
    filePath +
    "'); } " +
    "catch(exception) { throw new Error('Cannot open ' + __dirname + '" +
    filePath +
    "' + ': ' + exception); };"
  );
};

module.exports.raw = true;
