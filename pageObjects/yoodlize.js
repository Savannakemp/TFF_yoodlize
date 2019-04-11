var userCommands = {
    //checks multiple links to signup/login and signs up
    signup: function (firstName, lastName, email, password) {
        this
            //checks navigation to signup from login popup, and back to login popup    
            .assert.visible('@loginStart')
            .click('@loginStart')
            .assert.visible('@loginHdr')
            .click('@switchPopup')
            .assert.visible('@signupHdr')
            .click('@switchPopup')
            .assert.visible('@loginHdr')
            .click('@closeBtn')
            //signs up using the nav button using email
            .assert.visible('@signupStart')
            .click('@signupStart')
            .assert.visible('@signupHdr')
            .click('@useEmail')
            .setValue('@firstNameInput', firstName)
            .setValue('@lastNameInput', lastName)
            .setValue('@emailInput', email)
            .setValue('@passwordInput', password)
            .click('@checkBox')
            .click('@loginBtn')
            .waitForElementPresent('@helloBan', 5000)
            .verify.containsText('@helloBan', firstName, 'Name Present')
            .click('@nextBtn')
            .assert.visible('@photoBan')
            .click('@skipBtn')
            .assert.visible('@emailBan')
            .click('@skipBtn')
            .assert.visible('@tosBan')
            .click('@tosChkBox')
            .click('@nextBtn')
            .assert.visible('@doneBan')
            .click('@skipBtn')
            //logout - Need to solve for the required pause. 
            .pause(3000)
            .click('@acctBtn')
            .waitForElementPresent('@logoutBtn', 5000)
            .click('@logoutBtn')
            .assert.visible('@loginStart')
        return this
    },

    //Logs user in
    login: function (email, password) {
        this
            .assert.visible('@loginStart')
            .click('@loginStart')
            .assert.visible('@loginHdr')
            .setValue('@emailInput', email)
            .setValue('@passwordInput', password)
            .click('@loginBtn')
            .waitForElementPresent('@acctBtn', 5000)
            .assert.visible('@acctBtn')
        return this
    },
}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [userCommands],
    elements: {
        //selects the header of the popup message
        // popupMsg: {
        //     selector: '//div[contains(text(),"Thanks for testing")]',
        //     locateStrategy: 'xpath'
        // },
        // //selects the "Got it" button of the popup message
        // clearPopup: {
        //     selector: '//button[contains(text(),"Got it")]',
        //     locateStrategy: 'xpath'
        // },
        //Top right login button
        loginStart: {
            selector: '//*[contains(text(),"Log in")]',
            locateStrategy: 'xpath'
        },
        //Top right signup button
        signupStart: {
            selector: '//*[contains(text(),"Sign up")]',
            locateStrategy: 'xpath'
        },
        //login popup header
        loginHdr: {
            selector: '//h4//span[contains(text(),"Log in")]',
            locateStrategy: 'xpath'
        },
        //signup popup header
        signupHdr: {
            selector: '//h4//span[contains(text(),"Sign up")]',
            locateStrategy: 'xpath'
        },
        //Don't/Already have an account button (login/signup popup)
        switchPopup: {
            selector: '//span[contains(text(),"have an account?")]',
            locateStrategy: 'xpath'
        },
        //Sign up with e-mail button
        useEmail: {
            selector: '//button//span[contains(text(),"Sign up with Email")]',
            locateStrategy: 'xpath'
        },
        //Verify age chk box
        checkBox: {
            selector: '//form//div/i',
            locateStrategy: 'xpath'
        },
        //Add Photo Banner
        photoBan: {
            selector: '//div[contains(text(),"Add your picture")]',
            locateStrategy: 'xpath'
        },
        //Verify email banner
        emailBan: {
            selector: '//div[contains(text(),"Verify")]',
            locateStrategy: 'xpath'
        },
        //Initial account setup hello banner
        helloBan: {
            selector: '//div/div[1]/div[2]/div[2]//div[contains(text(),"Hi,")]',
            locateStrategy: 'xpath'
        },
        //Terms of Service Banner
        tosBan: {
            selector: '//div[contains(text(),"Accept")]',
            locateStrategy: 'xpath'
        },
        //All Set Banner
        doneBan: {
            selector: '//div[contains(text(),"all set")]',
            locateStrategy: 'xpath'
        },
        //Next button
        nextBtn: {
            selector: '//div/div[1]/div[2]/div[2]//button',
            locateStrategy: 'xpath'
        },
        //Agree to terms of service
        tosChkBox: {
            selector: '//div/div[1]/div[2]/div[2]/div/div/div[2]/div[4]/i',
            locateStrategy: 'xpath'
        },
        //Skip button
        skipBtn: {
            selector: '//div[contains(text(),"do this later")]',
            locateStrategy: 'xpath'
        },
        //selects the "Account Settings" from the account navigation menu
        acctSet: {
            selector: '//*[contains(text(),"Account Settings")]',
            locateStrategy: 'xpath'
        },
        //selects the "Logout" button from the account navigation menu
        // logoutBtn: {
        //     selector: '//div//span[contains(text(),"Logout")]',
        //     locateStrategy: 'xpath'
        // },
        // '.navbar-right .open form[action="/logout"] button' - CSS selector may be better than the above
        editProfile: {
            selector: '//*[contains(text(),"Edit Profile")]',
            locateStrategy: 'xpath'
        },
        //use to select password
        security: {
            selector: '//span[contains(text(),"Security")]',
            locateStrategy: 'xpath'
        },
        //selector in edit profile for modifying photo
        photoBtn: {
            selector: '//*[contains(text(),"Profile Photo")]',
            locateStrategy: 'xpath'
        },
        //selector in edit profile for verification
        verifyBtn: {
            selector: '//*[contains(text(),"Trust and Verification")]',
            locateStrategy: 'xpath'
        },
        //selector in edit profile to add phone #
        addPhone: {
            selector: '//a[contains(text(),"Add Phone")]',
            locateStrategy: 'xpath'
        },
        editProfSaveBtn: {
            selector: '//button[contains(text(),"Save")]',
            locateStrategy: 'xpath'
        },

        //login and account creation selectors
        emailInput: 'input[name="email"]',
        passwordInput: 'input[name="password"]',
        gotItButton: { selector: '//button[text()="Got it"]', locateStrategy: 'xpath' },
        loginBtn: 'button[type="submit"]',
        //search selectors
        searchBox: 'input[placeholder="Search for an Item"]',
        searchLink: { selector: '//div/span[contains(text(), "Search")]', locateStrategy: 'xpath' },
        searchHereBox: 'input[placeholder="Search here.."]',
        searchCityBox: 'input[placeholder="Enter your city"]',
        advancedSearch: { selector: '//*[contains(text(), "Advanced search")]', locateStrategy: 'xpath' },
        searchButton: { selector: '//button[contains(text(), "Search")]', locateStrategy: 'xpath' },
        //Id nav menu selector
        acctBtn: '#basic-nav-dropdown',
        //Edit profile selectors
        firstNameInput: 'input[name="firstName"]',
        lastNameInput: 'input[name="lastName"]',
        monthSel: 'select[name="month"]',
        daySel: 'select[name="day"]',
        yearSel: 'select[name="year"]',
        locationInput: 'input[name="location"]',
        bioInput: 'textarea[name="info"]',
        //Closes popups
        closeBtn: 'button.close',
        logoutBtn: '.navbar-right .open form[action="/logout"]',

    },
}