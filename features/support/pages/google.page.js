const {Selector} = require("testcafe");

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

//LOCATORS
exports.Elements = {
    url: function(){
        return "https://www.google.com";
    },

    searchBar: function () {
        return select("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").with({boundTestRun: testController});
    },

    dropdownFirstSuggestion: function() {
        return select("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > ul > li:nth-child(1) > div > div.zRAHie").with({boundTestRun: testController});
    },

    voyaTenerSuerteBtn: function (){
        return select("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc").with({boundTestRun: testController});
    },



}
