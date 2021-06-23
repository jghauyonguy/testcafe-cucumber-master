const {Given, When, Then} = require("cucumber");
const falabellaPage = require("../support/pages/falabellaPage/falabella-page.js");

Given("I navigate to Falabella Chile webpage", async function (){
    await testController.navigateTo(falabellaPage.Elements.url());
});

When("I click on Categorias menu to see the dropdown options", async function(){
    await testController.click(falabellaPage.Elements.closeFirstPopUp());
    await testController.click(falabellaPage.Elements.categoriasMenu());
    let getInnerFromCategoriasMenu = falabellaPage.Elements.categoriasMenu();
    await t.expect(getInnerFromCategoriasMenu.innerText).eql("Categorías","El innerText en web debe decir Categorías");

});
