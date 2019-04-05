module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        loginStart: {
            selector: '//*[contains(text(),"Log in")]',
            locateStrategy: 'xpath'
        },
        email: '[name="email"]',
        password: 'input[name="password"]',
        login: '[type="submit"]',
    },
}