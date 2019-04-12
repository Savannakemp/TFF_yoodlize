var yoodlizePOM = {}
var yoodlizeFun = require('../testAssets/userFun')
//change this prior to running these tests
var email = 'Blutoothi9@confirm.com'

module.exports = {
    beforeEach: browser => {
        // browser.url('alpha.yoodlize.com')
        yoodlizePOM = browser.page.yoodlize()
        yoodlizePOM.navigate()
            .waitForElementPresent('input[placeholder="Search for an item"]', 5000)
    },
    after: browser => {
        yoodlizePOM.end()
    },

    //Create New User - Check that no user logged in & new user logged in when complete
    'Create new user': browser => {
        yoodlizePOM
        //email value needs updated prior to each test.
        .signup('Hugh','Atchinson',email,'Trial123')
        //need to automate completing the new user popup and logging out?
    },

    //Login With New User - Verify that User is logged in
    'Login and verify status': browser => {
            // .login('UnobtainableMaster@maildrop.cc', 'Trial123')
            yoodlizeFun(yoodlizePOM, email, 'Trial123')
            
    },

    //Modify User Password - Verify that Password modified

    //Edit account details - Verify that account details modified

    //Edit Photo - Verify photo modified (Try Large / Med / Small / Gif / Other)

    //Verify e-mails received?? and Respond?? Account Recovery/ Verify Email/ Connect via G-mail / FB -- Stretch

}