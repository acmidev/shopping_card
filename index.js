const buttonBuy = document.querySelectorAll('.buy');
const buttonRent = document.querySelector('.rent');
const closeCart = document.getElementById('close-cart')
const cart = document.querySelector('.cart-icon')
const cartCard = document.querySelector('.buy-card')
var divInfo = document.getElementsByClassName('card')



//Products

class product {
    constructor(id,title, price ){
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

var bicycle = new product(122, "Bicycle", 199)
var motorbike = new product(233, "Motorbike", 399)
var car = new product(344, "Car", 1299)


var products = {
    bicycle,motorbike,car
}


///////////////////////////////////////////////////////////////////


cart.addEventListener('click', openCart);
closeCart.addEventListener('click', close)

buttonBuy.forEach(function(currentButton) {
    currentButton.addEventListener('click', getId)
})




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






function getId(){
    let id = document.getElementById('122')
    let child_nodes = id.child_nodes
    console.log(id)
    


  
}

function addToCart (){

    console.log(buttonBuy.parentNode.id)
    
    
    

}

 /* function addToCart (){
    let productTitle = products
    let productPrice = document.getElementById('product-price').innerHTML
    let productsCartDiv = document.querySelector('.cart-products-card')
    let productsPriceDiv = document.querySelector('.cart-products-total')

    
   
    

    


    

    let p = document.createElement("p")
    let x = document.createElement("SPAN")
    let a = document.createElement("p")

    
    
    x.innerHTML = `x${1}`
    a.innerHTML = productPrice
    


    productsCartDiv.appendChild(p)
    p.appendChild(x)

    
    
    productsPriceDiv.appendChild(a)
    
    

    

    
}


 */