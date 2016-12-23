var request = require('request');
var cheerio = require('cheerio');

var url = "http://warpdoor.com/";

request(url, function(error, response, html){

  if(!error){

    var $ = cheerio.load(html);

    var someJSON = {
      url: url,
      logo : getLogo($),
      posts: getPostNames($)
    };

    console.log(someJSON);
  }

});

function getLogo ($) {
  return $('.cover-container img').first().attr("src");
}

function getPostNames ($) {
  var array = [];
  if($('.post-item-title a')){
    $('.post-item-title a').each(function( index ) {
      array.push( $(this).attr("title") );
    });
  }
  return array;
}




