var fs = require('fs');
var path = require('path');

// just to make it dead easy
var async = require('async');
var request = require('request');

var source = 'https://raw.githubusercontent.com/arvida/emoji-cheat-sheet.com/master/public/graphics/emojis/';
var target = 'emojis';

var preload = function preloadEmoji(list, callback) {
    async.parallel(list.map(function(name) {
        var filename = name + '.png';
        var url = source + filename;
        
        return function(next) {
            var file = fs.createWriteStream(path.resolve(__dirname, target, filename));
            file.on('error', function(e) {
                next(e);
                file.close();
            });
            file.on('finish', function() {
                next();
                file.close();
            });
            
            request(url).pipe(file);
        };
    }), callback);
};

var getPath = function getPath(name) {
    return path.resolve(__dirname, target, name + '.png');
};

module.exports = {
    load: preload,
    getPath: getPath
};
