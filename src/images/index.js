const testFolder = './';
const fs = require('fs');
const path = require('path');

const allowedExts = [
  '.jpg' // add any extensions you need
];

const modules = {};

console.log('fs=' + fs + ' path=' + path);
console.log(fs);
console.log(path);

const files = fs.readdirSync(testFolder);

//const myImage = require('../../user.jpg');

if (files && files.length) {
  files
    .filter(file => allowedExts.indexOf(path.extname(file)) > -1)
    .forEach(
      file =>
        (exports[
          path.basename(file, path.extname(file))
        ] = require(`./${file}`))
    );
}
console.log(files);
module.exports = modules;
