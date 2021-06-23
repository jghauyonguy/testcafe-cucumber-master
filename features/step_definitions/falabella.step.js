const {Given, When, Then} = require("cucumber");
const falabellaPage = require("../support/pages/falabellaPage/falabella-page.js");

Given("1 I navigate to Falabella Chile webpage", async function (){
    await testController.navigateTo(falabellaPage.Elements.url());
});

When("2  I go to Categorias then Zapatos then Zapatos de Seguridad", async function(){
    await testController.click(falabellaPage.Elements.closeFirstPopUp());
    let getInnerFromCategoriasMenu = falabellaPage.Elements.categoriasMenuTittle();
    await testController.expect(getInnerFromCategoriasMenu().innerText).eql("Categorías","El innerText del menu es Categorías")
    await testController.click(falabellaPage.Elements.categoriasMenu());
    await testController.click(falabellaPage.Elements.zapatosMenuOption());
    await testController.click(falabellaPage.Elements.zapatosSeguridadSubMenu());
});

Then("3 I filter search for Botas", async function (){
    await testController.click(falabellaPage.Elements.setBotasAsFilterType());
});

Then("4 I select a Product and Shoes Size", async function(){
    await testController.click(falabellaPage.Elements.searchResultsProducts().child(3));
    await testController.click(falabellaPage.Elements.selectSizeOptions().child(3));
})

Then("5 I click on Agregar al Carro", async function() {
    await testController.click(falabellaPage.Elements.btnAgregarCarro());

})

Then("6 Increase the amount to four products using the plus button", async function () {
    for (let i=0;i<4;i++){
        await testController.click(falabellaPage.Elements.btnIncreaseProductQty());
    }
})

Then("7 Click on Ver Bolsa de Compras to see the detail", async function(){
    await testController.click(falabellaPage.Elements.btnIrAlCarroDeCompras())
})
