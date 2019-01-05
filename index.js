const { parse } = require("node-html-parser");
const rp = require("request-promise-native");
/**
 * Request comic image
 * @param {Object} options
 * @param {Number[]} options.date - An array with date in the form [year,month,day]
 * @param {Boolean} options.logging - A boolean for whether logging is enabled. Deafults to false
 * @param {String} options.comicName - Name of comic strip \n 
 */
exports.request = async function request(options) {
    const dateString = (function createForamttedDate() {
        const date = new Date(options.date);
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    })();

    const log = !!options.logging;

    log && console.log("Requesting image url ...");

    const parsedPage = parse(await rp("https://www.gocomics.com/garfield/" + dateString)
        .catch(err => {
            console.log("Request failed\n", err);
        })
    );
}