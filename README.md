# emoji-loader

Just a small module I made in order to pull in images on demand. You probably shouldn't use it.

I had a requirement to have image files on the filesystem, but I did not want to use a module like (emoji-images)[https://github.com/HenrikJoreteg/emoji-images] which package all of the image files. Instead, `emoji-loader` will download the images on-demand, and make only the ones you want available.

## API

    var emoji = require('emoji-loader');
    emoji.load(['cat'], funtion() {
        var filepath = emoji.getPath('cat');    
    });
