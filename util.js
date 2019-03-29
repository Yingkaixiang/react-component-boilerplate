const fs = require("fs");
const path = require("path");

function getEntry(dirpath, entry) {
  const current = entry || {};
  const relativepath = path.resolve(__dirname, dirpath);
  const dir = fs.readdirSync(relativepath, "utf8");
  dir.forEach(filename => {
    const name = filename.split(".")[0];
    const fullpath = `${relativepath}/${filename}`;
    const stat = fs.statSync(fullpath);
    if (stat.isDirectory()) {
      getEntry(fullpath, current);
    } else {
      current[name] = fullpath;
    }
  });
  return current;
}

module.exports = {
  getEntry
};
