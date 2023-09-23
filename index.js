// Code your solution in this file!
function returnFirstTwoDrivers(X){
    const arr = X.slice(0,2)
    return arr;
}

function returnLastTwoDrivers(X){
    const arr = X.slice(-2)
    return arr;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(X){

 return function (multiplier){
    
    return multiplier * X
 }
}

function fareDoubler(X){
 return X * 2;
}

function fareTripler(X){
    return X * 3;
   }

function selectDifferentDrivers(X,Y){
    return Y(X)
}