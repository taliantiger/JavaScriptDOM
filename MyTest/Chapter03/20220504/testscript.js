alert(document.getElementsByTagName("*").length);

var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");

alert(items.length);

for(var i = 0; i < items.length; i++){
    alert(typeof items[i]);
}