var yoodlizeSearch = {}


module.exports = {
    beforeEach: browser => {
        browser.url("https://alpha.yoodlize.com/")
        yoodlizeSearch = browser.page.yoodlize()
        yoodlizeSearch.navigate()
    },
    after: browser => {
        browser.end()
    },
    'General Search': browser => {
        yoodlizeSearch.search('cat', 'Rubix Cube')
    },
    'Advanced Search': browser => {
        yoodlizeSearch.advancedSearch('Clothing', 'Sporting Goods')
    },
}