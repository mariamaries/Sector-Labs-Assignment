// Getting the page class used to inherit from it
const Page = require('./page');

// Getting the page object
const PopularPage = require('./popular.page');


class PopularSearchesPage extends Page {

    constructor() {
        super();
        this.links = [];
        this.apartments = [];
    }

    get popularRentButton() {return $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[2]/div/div/div[2]')};
    get viewAllButton() {return $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[2]')};
    get dubaiAp() {return $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[1]/div/a')};

    // searching and getting the data from the popular properties for rent under the Dubai Apartments section
    async checkPopularList() {
        const timeout = 3000;

        // selecting the popular properties for rent
        await this.popularRentButton.waitForExist({ timeout });
        await expect(this.popularRentButton).toBeClickable();
        await this.popularRentButton.click();

        // displaying all the properties under the first sections
        await this.viewAllButton.waitForExist({ timeout });
        await expect(this.viewAllButton).toBeClickable();
        await this.viewAllButton.click();

        // selecting all the elements under the Dubai Apartments section
        const parent = await this.dubaiAp.parentElement();
        const grandParent = await parent.parentElement();
        const popularApartmentSearches = await grandParent.$('ul').$$('li');

        // extracting the length of popular searches for the apartments
        const length = await popularApartmentSearches.length;

        // adding links and texts into arrays used to verify the search page
        for (let i = 0; i < length; i++) {
            const ap = await popularApartmentSearches[i].$('a').getText();
            const link = await popularApartmentSearches[i].$('a').getAttribute('href');
            this.links.push(link);
            this.apartments.push(ap);
        }
    }

    // testing the links and verifying the search filters
    async verify() {
        const length = this.links.length;
        for (let i = 0; i < length; i++) {
            PopularPage.setName(this.apartments[i]);
            await PopularPage.open(this.links[i].substr(1, this.links[i].length - 1));
            await PopularPage.verify();
        }
    }

    open() {
        return super.open('');
    }


}

module.exports = new PopularSearchesPage();
