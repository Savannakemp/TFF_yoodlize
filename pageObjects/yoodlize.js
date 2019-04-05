module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        loginStart: {
            selector: '//*[contains(text(),"Log in")]',
            locateStrategy: 'xpath'
        },
        emailInput: 'input[name="email"]',
        passwordInput: 'input[name="password"]',
        loginButton: 'input[type="submit"]',
        searchBox: 'input[placeholder="Search for an Item"]',
        searchLink: { selector: '//div/span[contains(text(), "Search")]', locateStrategy: 'xpath' },
        searchHereBox: 'input[placeholder="Search here.."]',
        searchCityBox: 'input[placeholder="Enter your city"]',
        advancedSearch: { selector: '//*[contains(text(), "Advanced search")]', locateStrategy: 'xpath' },
        searchButton: { selector: '//button[contains(text(), "Search")]', locateStrategy: 'xpath' },
        
    },
}