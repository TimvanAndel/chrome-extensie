var e = document.getElementById("ddlViewBy");
var btcwidget = document.getElementById('bitcoin-widget');
var ethwidget = document.getElementById('ethereum-widget');

btcwidget.style.display="none";
ethwidget.style.display="none";
e.onchange =function test(){
    
var strUser = e.options[e.selectedIndex].text;
console.log(strUser);
if(strUser == "Selecteer een valuta"){
    btcwidget.style.display="none";
    ethwidget.style.display="none";
}
if(strUser == "Bitcoin"){
    btcwidget.style.display="block";
    ethwidget.style.display="none";
}
if(strUser == "Ethereum"){
    btcwidget.style.display="none";
    ethwidget.style.display="block";
}
}