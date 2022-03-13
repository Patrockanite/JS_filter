var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number array : ",numberArray);

/*var filteredNumberArray = numberArray.filter(function(value){ //value est un argument qui contiendra tour à tour les éléments du tableau
    return value > 5;
});*/

/*Une manière plus élégante */
function above5Filter(value){
    return value > 5;
}
var filteredNumberArray = numberArray.filter(above5Filter);

/* ceci ne bouge pas */
console.log("Filtered number array : ",filteredNumberArray);

/* Avec des strings */
var shoppingListe1 = ['Milk','Donuts','Cookies','Chocolate','Peanut Butter','Pepto Bismol','Pepto Bismol (Chocolate flavor)','Pepto Bismol (Cookie flavor)'];
/* var shoppingListe2 = [
    {name:"Milk",quantity:"2"},
    {name:"Donuts",quantity:"200"},
    {name:"Cookies",quantity:"300"},
    {name:"Chocolate",quantity:"5"}
]; */
console.log("Shopping list : ",shoppingListe1);

var searchValue = "Bismol";
function containsFilter(value){
    return value.indexOf(searchValue)!== -1;
}

var searchedShoppingList = shoppingListe1.filter(containsFilter);
console.log("Searched Shopping list : ",searchedShoppingList);