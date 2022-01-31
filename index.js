const buttonBuy = document.querySelector('.buy');
const buttonRent = document.querySelector('.rent');
const closeCart = document.getElementById('close-cart')
const cart = document.querySelector('.cart-icon')
const cartCard = document.querySelector('.buy-card')





cart.addEventListener('click', openCart);
closeCart.addEventListener('click', close)
cart.onc

cart.classList.add('inactive')

function openCart (){
    
    if(cart.classList.contains('inactive')){
        cart.classList.add('active')
        cart.classList.remove('inactive')
    }
    else{cart.classList.add('inactive')
         cart.classList.remove('active')   }
    
    

    if(cart.classList.contains('active')){
        cartCard.style.visibility = "visible"
    }else{
        cartCard.style.visibility = "hidden"
    }
   
    
}

function close () {


    cartCard.style.visibility = "hidden"
    if(cart.classList.contains('active')){
    cart.classList.remove('active')
    cart.classList.add('inactive')
    }
}

