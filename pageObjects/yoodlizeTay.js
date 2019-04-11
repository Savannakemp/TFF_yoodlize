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
        dropDown: '#basic-nav-dropdown',
        yoodleHeader: '.navbar-header',
        searchInput: '.form-control',
        searchResult: 'div[class="sc-kaNhvL kwEqLx"]',
        

        listBtn: {
            selector: '//*[contains(text(), "List Your Stuff")]',
            locateStrategy: 'xpath'
        },

        searchBtn: {
            selector: '//*[contains(text(), "Search")]',
            locateStrategy: 'xpath'
        },

        inboxBtn: {
            selector: '//*[contains(text(), "Inbox")]',
            locateStrategy: 'xpath'

        },

        myListings: {
            selector: '//*[contains(text(), "My Listings")]',
            locateStrategy: 'xpath'
        },
        
        reviewsBtn: {
            selector: '//*[contains(text(), "Reviews")]',
            locateStrategy: 'xpath'
        },

        editProfile: {
            selector: '//*[contains(text(), "Edit Profile")]',
            locateStrategy: 'xpath'
        },

        accountSettings: {
            selector: '//*[contains(text(), "Account Settings")]',
            locateStrategy: 'xpath'
        },



        

        
    },

}