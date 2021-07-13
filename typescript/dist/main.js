var doSomething = function () {
    // return something
    console.log('doSomething');
};
var doSomething2 = function () {
    //never stops
    throw 'never';
};
var vAny = 10;
var vUnknown = 10;
// let s1: string = vAny // can
var s2 = vUnknown; //cant
var pageNumber = '1';
var numericPageNumber = pageNumber; // assign
