var botonBasket =document.getElementById('basket');
var botonFut= document.getElementById('fut');
// var botonTennis = document.getElementById('tennis');

botonFut.addEventListener("click",mostrarFut);
botonBasket.addEventListener("click", mostrarBasket);
// botonTennis.addEventListener("click",mostrarTennis);

function mostrarBasket(){
 document.getElementById('basketball').style.display ="block";
 document.getElementById('futball').style.display ="none";
}

function mostrarFut(){
  document.getElementById('futball').style.display ="block";
 document.getElementById('basketball').style.display ="none";

}
