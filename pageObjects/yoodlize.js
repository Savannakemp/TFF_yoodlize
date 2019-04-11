var renterCommands = {
    
        //Rent item - Stin
        rentAnItem: function (date, duration, message, name, ccnumber, cvv, month, year)
            {this
                .click('@itemToRent')
                .waitForElementvisible('@dateInput')
                .click('@dateInput')
                .setValue('@dateInput', date)
                .setValue('@durationInput', duration)
                .click('@requestButton')
                .waitForElementvisible('@crediCard')
                .setValue('@messageBox', message)
                .setValue('@creditName', name)
                .setValue('@creidtNumber', ccnumber)
                .setValue('@creditCvv', cvv)
                .setValue('@creditMonth', month)
                .setValue('@creditYear', year)
                .click('@sendRequest')
            return this
            }

}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [renterCommands],

    elements: {
        //selects the header of the popup message
        popupMsg: {
            selector: '//div[contains(text(),"Thanks for testing")]',
            locateStrategy: 'xpath'
        },
        //selects the "Got it" button of the popup message
        clearPopup: {
            selector: '//button[contains(text(),"Got it")]',
            locateStrategy: 'xpath'
        },
        loginStart: {
            selector: '//*[contains(text(),"Log in")]',
            locateStrategy: 'xpath'
        },
        //selects the "Account Settings" from the account navigation menu
        acctSet: {
            selector: '//*[contains(text(),"Account Settings")]',
            locateStrategy: 'xpath'
        },
        //selects the "Logout" button from the account navigation menu
        logoutBtn: {
            selector: '//div//span[contains(text(),"Logout")]',
            locateStrategy: 'xpath'
        },
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
        loginButton: 'input[type="submit"]',
        searchBox: 'input[placeholder="Search for an Item"]',
        searchLink: { selector: '//div/span[contains(text(), "Search")]', locateStrategy: 'xpath' },
        searchHereBox: 'input[placeholder="Search here.."]',
        searchCityBox: 'input[placeholder="Enter your city"]',
        advancedSearch: { selector: '//*[contains(text(), "Advanced search")]', locateStrategy: 'xpath' },
        searchButton: { selector: '//button[contains(text(), "Search")]', locateStrategy: 'xpath' },
        gotItButton: {selector: '//button[text()="Got it"]', locateStrategy: 'xpath'},
        loginBtn: 'input[type="submit"]',
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

        //Renting item selectors - Stin
        //itemToRent: { selector: '//div[div="Bulb Planter"]', locateStrategy: 'xpath' },
        itemToRent: { selector: '//*[div="Fish Tape"]', locateStrategy: 'xpath' },
        dateInput: { selector: '//*[@id="date"]', locateStrategy: 'xpath' },
        durationInput: { selector: '//*[@placeholder="1"]', locateStrategy: 'xpath' },
        requestButton: { selector: '//button[contains(text(), "Start Request")]', locateStrategy: 'xpath' },
        creditCard: 'input[name="paymentType"]',
        messageBox: { selector: '//*[@name="message"]', locateStrategy: 'xpath' },
        creditName: { selector: '//*[@name="name"]', locateStrategy: 'xpath' },
        creditNumber: { selector: '//*[@name="cardNumber"]', locateStrategy: 'xpath' },
        creditCvv: { selector: '//*[@name="cvv"]', locateStrategy: 'xpath' },
        creditMonth: { selector: '//*[@name="expiryDate"]', locateStrategy: 'xpath' },
        creditYear: { selector: '//*[@name="expiryYear"]', locateStrategy: 'xpath' },
        sendRequest: { selector: '//div/button[contains(text(), "Send reservation request")]', locateStrategy: 'xpath' },

    },
}