module.exports = (editUser, fName, lName, month, day, year, location, bio) => {
    editUser
        //login -- check users logged in

        //open account nav menu
        .waitForElementPresent('@acctBtn', 5000)
        .click('@acctBtn')
        //navigate to edit profile
        .waitForElementPresent('@editProfile', 5000)
        .click('@editProfile')
        //change things and save
        .clearValue('@firstNameInput')
        .setValue('@firstNameInput', fName)
        .clearValue('@lastNameInput')
        .setValue('@lastNameInput', lName)
        //missing gender
        .pause(5000)
        .setValue('@monthSel', month)
        .setValue('@daySel', day)
        .setValue('@yearSel', year)
        .clearValue('@locationInput')
        .setValue('@locationInput', location)
        .clearValue('@bioInput')
        .setValue('@bioInput', bio)
        .click('@editProfSaveBtn')
        //verify changes (Should pull out into its own function)
        .verify.valueContains('@firstNameInput', fName)
        .verify.valueContains('@lastNameInput', lName)
        .verify.valueContains('@monthSel', month)
        .verify.valueContains('@daySel', day)
        .verify.valueContains('@yearSel', year)
        .verify.valueContains('@locationInput', location)
        .verify.valueContains('@bioInput', bio)
        //navigate to account management
        .click('@photoBtn')
        //navigate to edit profile
        .click('@profileNavBtn')
        .waitForElementPresent('@bioInput')
        //verify changes
        .verify.valueContains('@firstNameInput', fName)
        .verify.valueContains('@lastNameInput', lName)
        .verify.valueContains('@monthSel', month)
        .verify.valueContains('@daySel', day)
        .verify.valueContains('@yearSel', year)
        .verify.valueContains('@locationInput', location)
        .verify.valueContains('@bioInput', bio)





    return editUser
}