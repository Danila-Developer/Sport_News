let Parser = require('rss-parser');
let parser = new Parser({
   customFields: {
      item: [
         ['media:group', 'media']
      ],
    }
   }
);


(async () => {

  let feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCUZT_JKU6H87cLjC-4K2YCg');
  const VideoImg = feed.items[0].media['media:thumbnail'][0]['$'].url
  console.log(feed.items[0]);

  

})();