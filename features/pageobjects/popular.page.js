const Page = require('./page');

// class used to check if the content of a search page is correct
class PopularPage extends Page {
    constructor() {
        super();
        this.fieldTimeoutMs = 15000;
    }

    setName (name) {
        this.name = name;
    }

    get purposeButton () {return $('//*[@id="large-search-form"]/div/div/div[1]/div[1]/div/div/span/span')};
    get location() {return $('//*[@id="large-search-form"]/div/div/div[1]/div[2]/div/div/ul/li/span')};
    get propertyType() {return $('//*[@id="large-search-form"]/div/div/div[1]/div[3]/div/div/span/span')};

    // verifying that the search page contains the filters Apartment, Rent, and the specific location
    async verify () {
        await this.purposeButton.waitForExist(this.fieldTimeoutMs);
        await expect(this.purposeButton).toHaveText('Rent');
        await this.propertyType.waitForExist(this.fieldTimeoutMs);
        await expect(this.propertyType).toHaveText('Apartment');
        await this.location.waitForExist(this.fieldTimeoutMs);
        await expect(this.location).toHaveTextContaining(this.name.substring(0, this.name.indexOf('-')));
    }
}

module.exports = new PopularPage();