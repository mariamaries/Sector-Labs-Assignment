const { Given, When, Then} = require('@wdio/cucumber-framework');

const PopularSearchesPage = require('../pageobjects/popular-searches.page');

const pages = {
    popular: PopularSearchesPage
}

Given(/^I am on under the (\w+) section$/, async (page) => {
    await pages[page].open();
});

When(/^I look for Dubai apartments$/, async () => {
    await PopularSearchesPage.checkPopularList();
});

Then(/^All the links should lead to a correct search page$/, async () => {
    await PopularSearchesPage.verify();
});
