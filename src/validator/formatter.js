const trim = function (){
    let str ='     FunctionUp batch     ';
    console.log("The trimmed message is:", str.trim())
}
const toLowerCase = function(){
console.log('Output of this function is:','PRANay'.toLowerCase())
}
const toUpCase = function(){
    console.log('Output of this function is:','praNaY'.toUpperCase())
    }

    // console.log("trimmed the string white spaces: " + str.trim())
    // console.log("changed the string to lower case: " + str.toLowerCase())
    // console.log("changed the string to UPPER case: " + str.toUpperCase())
    // return;


module.exports.trimming = trim;
module.exports.toLowCase =toLowerCase;
module.exports.toUpperCase =toUpCase;