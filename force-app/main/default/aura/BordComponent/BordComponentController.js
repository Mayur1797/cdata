({
    doInit : function(component, event, helper) {
console.log("intialization completed");
const words= helper.getwords(6)
console.log("words:"+ words);

console.log("win word: " + helper.getwinword(words) );
    }
})
