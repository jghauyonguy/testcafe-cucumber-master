const {Selector} = require("testcafe");

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

//LOCATORS
exports.Elements = {
    url: function(){
        return "https://www.falabella.com/falabella-cl/"
    },


}