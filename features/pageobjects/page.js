module.exports = class Page {

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    async open (path) {
        await browser.url(`https://www.bayut.com/${path}`);
    }
}