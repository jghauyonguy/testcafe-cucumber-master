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

    zapatosMenuOption: function (){
      return select("#cross-header > div.Header-module_header-util-bar__3c_pb > div > div:nth-child(2) > div > ul > li:nth-child(13) > div > p").with({boundTestRun: testController});
    },

    zapatosSeguridadSubMenu: function (){
        return select("#testId-ThirdLevelMenu-link").with({boundTestRun: testController});
    },





















}