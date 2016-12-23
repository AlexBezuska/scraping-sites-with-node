# Scraping sites with node

## by Alex Bezuska

#### Talk date: 2016.12.21

Demonstration code for a talk I gave at JSLou (Louisville KY's JavaScript group) about using node, request, and cheerio to scrape data from websites.

### Instructions:

`index.js` will take the URL specified on line 4:
```
var url = "http://warpdoor.com/";
```

The program then uses request to pull in the html content of the desired url and pass it into a function where we can use it as `html`.


Passing the `html` variable created by request into `cheerio.load()` will allow cheerio to parse this text as jQuery would int he dom.


Then the program creates a JSON object containing the url, logo, and an array of post names. It does this using Cheerio, which is a server-side implementation of jQuery. You can see in the two functions at the bottom `getLogo` and `getPostNames` that you can use jQuery selectors to pinpoint elements and their content on a web page.


The final step is logging it out to the console, the result will be something like this:
```
{ url: 'http://warpdoor.com/',
  logo: '/content/images/2014/Apr/warpdoor_logo_placeholder.png',
  posts:
   [ 'If You Told Me To (Kimberly Pena)',
     'Dream Quest (Peter Whalen)',
     'A Christmas Game (Jack King-Spooner)',
     'SOLITUNE (Rat King Entertainment)',
     'Empty (Dustyroom)',
     'Sonder (Ludipe)',
     'Non Euclidean Room (Antoine Zanuttini)',
     'Room 007 (Lancelot Gao)',
     'FIIL Mark 37 (Martin Cohen)',
     'Ernő & Rubï (Mike Mezhenin)',
     'touch me2 (Animal Phase)',
     'Acre 6 (Blendo Games)',
     'Captain\'s Room (NicolaiGD)',
     'The Employee (Paul Lawitzki)',
     'Artificial Creativity (George B. Green)' ] }
```

### How to use:

* Install node (instructions for your OS here: https://nodejs.org/en/)
* Clone this repository or download the zip
* Navigate to this project in your terminal
* Run the program using `node index.js`
* You should see the JSON object output to your console.

### Experiment!

* Try changing the URL you are scraping from, also comment out the function `getPostNames` since it is specific to warpdoor.com, remember to comment out `getPostNames($)` on line 15 as well.

* Try modifying the `getLogo` function's jQuery selector to grab the logo from another site.

* Try creating your own function to grab something else from a sites


