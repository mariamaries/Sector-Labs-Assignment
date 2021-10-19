const Page = require('./page');

class SearchPage extends Page {

    get locationSearch () { return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[2]/div/div/ul/input') }
    get locationSelect () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[2]/div/div/div/ul/li[1]/button')}
    get SelectedLocation (){return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[2]/div/div/ul/li/span')}
    get findButton () {return $('=Find')}
    get selectButton () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[1]/div/div[1]')}
    get saleButton () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[1]/div/div[2]/div/div[1]/div/span[1]/button')}
    get locations () {return $$('[aria-label="location"]')}

    // searching for properties for sale at the specific location
    async search (location) {

        // defined the sleep function to throttle the execution of specific actions and to wait for the page to load
        const sleep = (time) => new Promise(resolve => {
            setTimeout(() => resolve(), time);
        });

        // typing the name of the location in the search input
        for (const char of location) {
            await this.locationSearch.addValue(char);
            await sleep(200);
        }
        await sleep(500);

        // selecting the location from the auto-complete list
        await this.locationSelect.click();
        await expect(this.SelectedLocation).toHaveText(location);
        await expect(this.SelectedLocation).toBeClickable();

        // selecting the 'for sale' properties
        await expect(this.selectButton).toBeClickable();
        await this.selectButton.click();
        await expect(this.saleButton).toBeClickable();
        await expect(this.saleButton).toHaveText('Buy');
        await this.saleButton.click();

        // pressing the find button
        await expect(this.findButton).toBeClickable();
        await this.findButton.click();
        await sleep(5000);
    }

    // verifying that all properties displayed are at the specified location
    async verify (location) {
        for (const l of await this.locations) {
            await expect(l).toHaveTextContaining(location);
        }
    }

    open () {
        return super.open('');
    }
}

module.exports = new SearchPage();
