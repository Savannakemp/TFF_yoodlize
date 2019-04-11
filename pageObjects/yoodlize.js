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
var customCommands = {
    search: function (search1, search2){
        this
            //search for an item from homepage, using search box
            .setValue('@searchBox', search1)
            .click('@searchConfirm')
            .waitForElementPresent('@searchKeyword', 5000)
            .verify.containsText('@searchKeyword', search1)     
            .verify.containsText('@searchResult', search1, 'Search is good!') 
            .pause(1000)
        this    
            //search for an item using searchlink
            .clearValue('@searchHereBox')
            .click('@searchLink')
            .clearValue('@searchHereBox')
            .setValue('@searchHereBox', search2)
            .click('@searchButton')
            .waitForElementPresent('@searchKeyword', 5000)
            .verify.containsText('@searchKeyword', search2)
            .verify.containsText('@searchResult', search2, 'Search is good!')
            .clearValue('@searchHereBox')
            .pause(1000)
            .useXpath()
            .click('//*[contains(text(), "keyword")]/div')
        return this
    },
    advancedSearch: function (advanced1, advanced2){
        this
            //test of 'clear all' button
            .waitForElementPresent('@searchLink')
            .click('@searchLink')
            .waitForElementPresent('@advancedSearch')
            .click('@advancedSearch')
            .clearValue('@searchHereBox')
            .pause(1000)
            .click('@clothing')
            .click('@searchButton')
            .pause(1000)
            .verify.containsText('@advancedSearchCategory', advanced1)
            .click('@advancedSearch')
            .click('@clearButton')
            .verify.elementNotPresent('@advancedSearchCategory', 'Element Not Present!')
        this
            //test of advanced categories
            .click('@advancedSearch')
            .pause(1000)
            .click('@sportingGoods')
            .click('@searchButton')
            .pause(1000)
            .verify.containsText('@advancedSearchCategory', advanced2), "Element is Present!"
        return this
    }
}

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
    commands: [customCommands, userCommands, renterCommands],
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
        loginButton: 'input[type="submit"]',
        //search function selectors
        searchBox: 'input[placeholder="Search for an item"]',
        searchConfirm: { selector: '(//div/button)[2]', locateStrategy: 'xpath' },
        gotItButton: { selector: '//button[text()="Got it"]', locateStrategy: 'xpath' },
        loginBtn: 'button[type="submit"]',
        //search selectors
        searchLink: { selector: '//div/span[contains(text(), "Search")]', locateStrategy: 'xpath' },
        searchHereBox: 'input[placeholder="Search here.."]',
        searchCityBox: 'input[placeholder="Enter your city"]',
        searchKeyword: { selector: '//*[contains(text(), "keyword")]', locateStrategy: 'xpath' },
        searchResult: { selector: '(//div[@id="card-title"])[1]', locateStrategy: 'xpath'},
        advancedSearch: { selector: '//*[contains(text(), "Advanced search")]', locateStrategy: 'xpath' },
        searchButton: { selector: '//button[contains(text(), "Search")]', locateStrategy: 'xpath' },
        advancedSearchCategory: { selector: '//div/div[contains(text(), "category")]', locateStrategy: 'xpath' },
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
        //Advanced Search Selectors
        clothing: { selector: '(//ins[@class="iCheck-helper"]) [1]', locateStrategy: 'xpath'},
        sportingGoods: { selector: '(//ins[@class="iCheck-helper"]) [2]', locateStrategy: 'xpath'},
        homeAndKitchen: { selector: '(//ins[@class="iCheck-helper"]) [3]', locateStrategy: 'xpath'},
        outdoorGear: { selector: '(//ins[@class="iCheck-helper"]) [4]', locateStrategy: 'xpath'},
        electronics: { selector: '(//ins[@class="iCheck-helper"]) [5]', locateStrategy: 'xpath'},
        tools: { selector: '(//ins[@class="iCheck-helper"]) [6]', locateStrategy: 'xpath'},
        toysAndGames: { selector: '(//ins[@class="iCheck-helper"]) [7]', locateStrategy: 'xpath'},
        partyEquipment: { selector: '(//ins[@class="iCheck-helper"]) [8]', locateStrategy: 'xpath'},
        businessEquipment: { selector: '(//ins[@class="iCheck-helper"]) [9]', locateStrategy: 'xpath'},
        localExperts: { selector: '(//ins[@class="iCheck-helper"]) [10]', locateStrategy: 'xpath'},
        recreationalVehicles: { selector: '(//ins[@class="iCheck-helper"]) [11]', locateStrategy: 'xpath'},
        venues: { selector: '(//ins[@class="iCheck-helper"]) [12]', locateStrategy: 'xpath'},
        lawnAndGarden: { selector: '(//ins[@class="iCheck-helper"]) [13]', locateStrategy: 'xpath'},
        experiences: { selector: '(//ins[@class="iCheck-helper"]) [14]', locateStrategy: 'xpath'},
        misc: { selector: '(//ins[@class="iCheck-helper"]) [15]', locateStrategy: 'xpath'},
        clearButton: { selector: '//*[contains(text(), "Clear all")]', locateStrategy: 'xpath'},
        //Closes popups
        closeBtn: 'button.close',
        logoutBtn: '.navbar-right .open form[action="/logout"]',

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