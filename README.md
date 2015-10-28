# emoji-loader

[![Downloads][7]][8] [![Version][9]][8] [![ISC License][10]][11] [![Analytics][12]][13]

[7]: https://img.shields.io/npm/dm/emoji-loader.svg?style=flat-square
[8]: https://www.npmjs.com/package/emoji-loader

[9]: https://img.shields.io/npm/v/emoji-loader.svg?style=flat-square

[10]: https://img.shields.io/npm/l/emoji-loader.svg?style=flat-square
[11]: http://opensource.org/licenses/ISC

[12]: https://ga-beacon.appspot.com/UA-17159207-7/emoji-loader/readme?flat
[13]: https://github.com/igrigorik/ga-beacon

Just a small module I made in order to pull in images on demand. You probably shouldn't use it.

I had a requirement to have image files on the filesystem, but I did not want to use a module like [emoji-images](https://github.com/HenrikJoreteg/emoji-images) which package all of the image files. Instead, `emoji-loader` will download the images from [emoji cheat sheet](https://github.com/arvida/emoji-cheat-sheet.com) on-demand, and make only the ones you want available.

## API

    var emoji = require('emoji-loader');
    emoji.load(['cat'], funtion() {
        var filepath = emoji.getPath('cat');    
    });
