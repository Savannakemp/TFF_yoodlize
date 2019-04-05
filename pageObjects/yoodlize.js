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
    },
}