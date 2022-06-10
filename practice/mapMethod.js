// var ary = [11, 4, 9, 16];

// var b = ary.map(test);
// document.write(b);

// function test(x){
//     return x * 10;
// }

var ary = [
    {fname : "Yahoo" , lname : "Baba"},
    {fname : "Rahul" , lname : "Kumar"},
    {fname : "Karan" , lname : "Sharma"},
];

var b = ary.map(test);
document.write(b);

function test(x){
    return x.lname;
}