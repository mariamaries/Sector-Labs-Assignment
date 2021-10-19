const { Given, When, Then } = require('@wdio/cucumber-framework');

const SearchPage = require('../pageobjects/search.page');

const pages = {
    search: SearchPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I search with (.*)$/, async (location) => {
    await SearchPage.search(location)
});

Then(/^I should see only places in (.*)$/, async (location) => {
    await SearchPage.verify(location)
});

