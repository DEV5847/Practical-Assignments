var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('C:/Users/DELL/Desktop/SEM-7/701/Node/Assignments/Assignment-1/Assignment-1/que5/file1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('../files/zipfile.txt.gz'));

console.log("File Compressed.");