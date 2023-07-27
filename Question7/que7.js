var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var unlinkFile = Promise.promisify(fs.unlink);

unlinkFile("file1.txt")
    .then(function() {
        console.log("unlink successfully");
    })
    .catch(function(e) {
        console.log("Error while unlink the file", e);
    });