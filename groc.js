 let searchform = document.querySelector('.search-form');
 
 document.querySelector('#search-btn').onclick = () =>{
searchform.classList.toggle('active');
navbar.classList.remove('active');
loginform.classList.remove('active');
shoppingcart.classList.remove('active');
 }
//  form btn end


//  cart btn start 
let shoppingcart = document.querySelector('.shopping-cart');
 
document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    navbar.classList.remove('active');
loginform.classList.remove('active');
searchform.classList.remove('active');

}
//  cart btn end

//  login btn start 
let loginform = document.querySelector('.login-form');
 
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
searchform.classList.remove('active');
shoppingcart.classList.remove('active');

}
//  login  btn end
//  menu btn start 
let navbar  = document.querySelector('.navbar');
 
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');

    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
}
//  menu btn end
// navbar.classList.remove('active');
// loginform.classList.remove('active');
// shoppingcart.classList.remove('active');















