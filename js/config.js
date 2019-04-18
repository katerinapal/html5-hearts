var levels;
var names;
;
"use strict";

var names = ["Chakravartin", "Octavian", "Antony", "Lepidus"],
    levels = [-1, 1, 2, 3];

try{
    var loadedNames = JSON.parse(localStorage.getItem("names"));
    if(loadedNames) names = loadedNames;
} catch(e){}

try{
    var loadedLevels = JSON.parse(localStorage.getItem("levels"));
    if(loadedLevels) levels = loadedLevels;
} catch(e){}

var bindingVariable = {
    names: names,
    levels: levels,
    sync: function(){
        localStorage.setItem("names", JSON.stringify(names));
        localStorage.setItem("levels", JSON.stringify(levels));
    }
};

export default bindingVariable;