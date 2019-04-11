
var yoodleDoodle = {}

var funYoodle = (funDoodle, searchName, searchVerify) => {
    funDoodle
        .setValue('@searchInput', searchName + "\ue007")
        .expect.element('@searchResult').text.to.equal(`keyword: ${searchVerify} |`)

}

module.exports={
    beforeEach: browser=> {
        browser.url('https://alpha.yoodlize.com/')
        yoodleDoodle = browser.page.yoodlizeTay()
        yoodleDoodle.navigate()
    },
    after: browser=> {
        browser.end()
    },


    // 'Test the Header': browser=> {
    //     yoodleDoodle
    //     .click('@listBtn')
    //     .waitForElementPresent('body', 3000)
    //     .click('@yoodleHeader')
    //     .click('@searchBtn')
    //     .waitForElementPresent('body', 3000)
    //     .click('@yoodleHeader')
    //     .click('@inboxBtn')
    //     .waitForElementPresent('body', 3000)
    //     .click('@yoodleHeader', 3000)
    //     .click('@dropDown', 3000)
    //     .click('@myListings')
    //     .waitForElementPresent('body', 3000)
    //     .click('@yoodleHeader')
    //     .click('@dropDown', 3000)
    //     .click('@reviewsBtn')
    //     .waitForElementPresent('body', 3000)
    //     .click('@yoodleHeader')
    //     .click('@dropDown', 3000)
    //     .click('@editProfile')
    //     .waitForElementPresent('body', 3000)
    //     .click('@yoodleHeader')
    //     .click('@dropDown', 3000)
    //     .click('@accountSettings')
    //     .waitForElementPresent('body', 3000)

    // },

    'Test the Search Bar': browser=> {
        funYoodle(yoodleDoodle, 'table saw', 'table saw')


    }
}