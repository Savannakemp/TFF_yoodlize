var yoodlize = {}

module.exports = {
    //setup
    beforeEach: browser =>{
        yoodlize = browser.page.yoodlize();
        yoodlize.navigate();
    },
    //teardown
    after: browser =>{
        browser.end()
    },
    //Data for renting an item
    'Renting an item': ()=> {
        yoodlize
            .login('UnobtainableMaster@maildrop.cc', 'Trail123')
            .rentAnItem('04/20/2019', '1', 'I want to rent this.', 'Billy Bob',
            '4242424242424242', '555', '09', '2019')
    },

}

