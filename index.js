const buttonBuy = document.querySelectorAll('.buy');
const buttonRent = document.querySelector('.rent');
const closeCart = document.getElementById('close-cart')
const cart = document.querySelector('.cart-icon')
const cartCard = document.querySelector('.buy-card')
var divInfo = document.getElementsByClassName('card')
var grid = document.getElementById('grid')


//Cart 

var cartList = {}

//Products

/* class product {
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
} */


///////////////////////////////////////////////////////////////////


cart.addEventListener('click', openCart);
closeCart.addEventListener('click', close)
grid.addEventListener('click', e => {
    addCart(e)
})

/* buttonBuy.forEach(function(currentButton) {
    currentButton.addEventListener('click', getId)
}) */




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




//agregar al carrito

const addCart = e => {
    //console.log(e.target)
   // console.log(e.target.classList.contains('buy'))
    if(e.target.classList.contains('buy')){
        setCart(e.target.closest('.container'))
        
    }
    

    console.log(cartList)

    e.stopPropagation()
}

const setCart = objeto =>{
   
    const producto = {
        id: objeto.querySelector('.buy').id,
        title: objeto.querySelector('.product-title').textContent,
        price: objeto.querySelector('#product-price').textContent,
        quantity: 1
    }

    if(cartList.hasOwnProperty(producto.id)){
        producto.quantity = cartList[producto.id].quantity + 1
       
        console.log("rescribir")


       
    }
     if(!(producto.id in cartList)){
        var productsCartDiv = document.querySelector('.cart-products-card')
        var productsPriceDiv = document.querySelector('.cart-products-total')
        let p = document.createElement("p")
        p.innerHTML = producto.title
        productsCartDiv.appendChild(p)
        var x = document.createElement("SPAN")
        x.innerHTML = `x${producto.quantity}`
        x.setAttribute('id', 'cantidad')
        p.appendChild(x)
        var a = document.createElement("p")
        price =  parseInt(producto.price)
        a.innerHTML = price
        productsPriceDiv.appendChild(a)
    }else{
        console.log(`x${producto.quantity}`)
       
        
        
        
         
      
         
    
        }

        cartList[producto.id] = {...producto}
        

        
}



    



