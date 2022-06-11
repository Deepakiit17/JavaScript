let jsonObj = {
    name: "DK",
    channel: "CWH",
    hobby: "Cricket",
    food: "Karela"
}

console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Karela', 'Bhindi');
console.log(myJsonStr);

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);