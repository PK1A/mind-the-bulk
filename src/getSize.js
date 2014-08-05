var fs = require('fs');
var path = require('path');

var gzipSize = require('gzip-size');
var uglifyjs = require('uglifyjs');

module.exports = function (filePaths) {

    var result = [];

    //filePaths can be either a single string or an array of paths
    if (typeof filePaths === 'string') {
        filePaths = [filePaths];
    }

    filePaths.forEach(function(filePath){
        var fileContent = fs.readFileSync(filePath, "utf8");
        var fileMinContent = uglifyjs.minify(fileContent, {
            fromString: true
        }).code;

        result.push({
            file: path.basename(filePath),
            raw: Buffer.byteLength(fileContent, 'utf8'),
            min: Buffer.byteLength(fileMinContent, 'utf8'),
            gzip: gzipSize.sync(fileMinContent)
        });
    });

    return result;
};