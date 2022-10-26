cart = []

function onload(){
    cart = JSON.parse(localStorage.getItem('cart')) || []
    document.getElementById('cart').innerHTML = `Cart (${cart.length})`
}

function addToCart(item) {
    if(!item) return
    cart.push(item)
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart))
    document.getElementById('cart').innerHTML = `Cart (${cart.length})`
}

// Path: cart.html
cart = JSON.parse(localStorage.getItem('cart'))

//  remove cart item
function removeItem(i) {
    cart.splice(i, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    document.getElementById('cart').innerHTML = `Cart (${cart.length})`
}