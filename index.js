const { parse } = require("node-html-parser");
const rp = require("request-promise-native");
const r = require("request")

/**
 * Request comic image
 * @param Object options
 * @param {Number[]} options.date - An array with date in the form [year,month,day]
 * @param {String} options.comicName - Name of comic strip \n e.g. gafield, bignate
 * @param {Boolean} options.URLOnly - If true, will return only the URL of the image, not wrapped in a Request object
 * @returns {Promise<String|Request>} Promise object represents an instance of request() from the request library for the image, or String with image URL
 */
exports.getImage = async function request(options) {
    const dateString = (function createForamttedDate() {
        const date = new Date(...options.date);
        return date.getFullYear() + "/" + (date.getMonth()) + "/" + date.getDate();
    })();

    console.log(dateString)

    const parsedPage = parse(await rp("https://www.gocomics.com/" + options.comicName + "/" + dateString)
        .catch(err => {
            console.log("Request failed\n", err);
        })
    )

    const imageURL = parsedPage.querySelector(".item-comic-image img").rawAttrs.split(/ src=/)[1].replace(/"/g, "");

    return options.URLOnly ? imageURL : r(imageURL);
}