const {Given, When, Then} = require('cucumber');

const googlePage = require('../support/pages/google.page.js')


Given("I go to Google home page", async function() {
    await testController.navigateTo(googlePage.Elements.url())
})

When("I am typing my search request {string} on Google", async function (inputSearch){
    await testController.typeText(googlePage.Elements.searchBar(), inputSearch);

})

Then("I verify the suggested search in the {string} list", async function (suggestedSearch){
    let getInnerFromDropdown = (googlePage.Elements.dropdownFirstSuggestion().innerText)
    await testController.expect(getInnerFromDropdown).eql(suggestedSearch)
    return (await getInnerFromDropdown).trimLeft()

})


