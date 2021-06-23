const {Selector} = require("testcafe");

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

//LOCATORS
exports.Elements = {
    url: function(){
        return "https://www.falabella.com/falabella-cl/"
    },

    closeFirstPopUp: function (){
        return select("body > div.dy-modal-container.dy-act-overlay > div.dy-modal-wrapper > div > div.dy-lb-close").with({boundTestRun: testController});;
    },

    NoToDealsNotification: function (){
        return select("#acc-alert-deny").with({boundTestRun: testController});;
    },

    categoriasMenu: function (){
        return select("#testId-HamburgerBtn-toggle > div.HamburgerBtn-module_icon__1ctEI > div").with({boundTestRun: testController});
    },

    categoriasMenuTittle: function (){
        return select("#testId-HamburgerBtn-toggle > div.MediaComponent-module_tablet-desktop__3xCIl > span").with({boundTestRun: testController});
    },

    zapatosMenuOption: function (){
      return select("#cross-header > div.Header-module_header-util-bar__3c_pb > div > div:nth-child(2) > div > ul > li:nth-child(13) > div > p").with({boundTestRun: testController});
    },

    zapatosSeguridadSubMenu: function (){
        return select("#testId-ThirdLevelMenu-link").with({boundTestRun: testController});
    },

    setBotasAsFilterType: function (){
        return select("#testId--desktop-container > div > ul > li:nth-child(2) > div > ul > li:nth-child(9) > label").with({boundTestRun: testController});
    },

    searchResultsProducts: function (){
        return select("#testId-searchResults-products").with({boundTestRun: testController});
    },

    selectSizeOptions: function (){
        return select("#__next > div > section > div.jsx-4234634535.container > div.jsx-4234634535.productContainer > div.jsx-4113348717.pdp-container > section.jsx-4113348717.pdp-detail-section > div:nth-child(3) > div > div:nth-child(1) > div.jsx-1736324396.size-container.fa--sizes > div.jsx-1736324396.size-options").with({boundTestRun: testController});
    },

    btnAgregarCarro: function () {
        return select("#buttonForCustomers").with({boundTestRun: testController});
    },

    btnIncreaseProductQty: function () {
        return select("#__next > div > div > div > div > div > div > div.jsx-338346703.body.small.with-warning > div > div > div > div > div.jsx-4256012525.stepper > div > button.jsx-635184967.increment").with({boundTestRun: testController});
    },

    btnIrAlCarroDeCompras: function(){
        return select("#linkButton").with({boundTestRun: testController});
    }





















}