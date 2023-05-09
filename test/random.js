const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();

describe('This is some random code', () => {
    let driver;
    beforeEach(() => {
        driver = new Builder().forBrowser('firefox').build();
    });

    afterEach(() => {
        driver.quit();
    });

    it('1. should open google search', async () => {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        title.should.equal('Google');
    });

    it('2. should open google search', async () => {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        title.should.equal('Google');
    });

    it('3. should open google search', async () => {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        title.should.equal('Google');
    });

});