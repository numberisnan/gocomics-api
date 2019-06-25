# gocomics-api
A public API for gocomics.com. Uses scraping of response HTML to locate the actual image URL.

## Usage

**getImage(options)**

Used to get either image URL string or a request object for the URL

```javascript
/**
 * Request comic image
 * @param Object options
 * @param {Number[]} options.date - An array with date in the form [year,month,day]
 * @param {String} options.comicName - Name of comic strip \n e.g. gafield, bignate
 * @param {Boolean} options.URLOnly - If true, will return only the URL of the image, not wrapped in a Request object
 * @returns {Promise|String} Promise object represents an instance of request() from the request library for the image, or String with image URL
 */
```

```javascript
const { getImage } = require("gocomics-api");

const imageString = getImage({
    date: [2019,1,1],
    comicName: "bignate",
    URLOnly: true
})
```

## Bugs

The scraper relied heavily on the gocomics.com site to keep their website consistent, so a change may break the module. If that happens, be sure to submit a pull request or issue. 