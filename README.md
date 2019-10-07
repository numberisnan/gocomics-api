# gocomics-api
A public API for gocomics.com. Uses scraping of response HTML to locate the actual image URL.

```javascript
const { getImage } = require("gocomics-api");

const imageString = getImage({
    date: [2019,1,1],
    comicName: "bignate",
    URLOnly: true
})
```
<a name="getImage"></a>

## getImage(Object) ⇒ <code>Promise.&lt;(String\|Request)&gt;</code>
Request comic image

**Kind**: global function  
**Returns**: <code>Promise.&lt;(String\|Request)&gt;</code> - Promise object represents an instance of request() from the request library for the image, or String with image URL  

| Param | Type | Description |
| --- | --- | --- |
| Object |  | options |
| options.date | <code>Array.&lt;Number&gt;</code> | An array with date in the form [year,month,day] |
| options.comicName | <code>String</code> | Name of comic strip \n e.g. garfield, bignate |
| options.URLOnly | <code>Boolean</code> | If true, will return only the URL of the image, not wrapped in a Request object |

## Bugs

The scraper relied heavily on the gocomics.com site to keep their website consistent, so a change may break the module. If that happens, be sure to submit a pull request or issue. 

