var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('../files/zipfile.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('file1.txt', 'utf-8'));

console.log("File Decompressed.");