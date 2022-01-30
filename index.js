const buttonBuy = document.querySelector('.buy');
const buttonRent = document.querySelector('.rent');
var cart = document.querySelector('.buy-card')


buttonBuy.addEventListener('click', buyCard);
buttonRent.addEventListener('click', saludar);


function saludar(){
   
    console.log("hola")
};

function buyCard (){
    cart.style.visibility = "visible"
}


