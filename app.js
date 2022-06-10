// change cart box color

document.getElementsByClassName('cart')[0].addEventListener('dblclick', function () {
    document.getElementsByClassName('cart')[0].style.background = 'teal';
})
// document.querySelector('.cart').addEventListener('dblclick', function () {
//     document.querySelector('.cart').style.background = 'teal';
// })


// document.getElementsByClassName('cart-item')[0].addEventListener('dblclick', function () {
//     document.querySelector('.cart').style.background = 'salmon';
// })
// document.getElementsByClassName('cart-item')[1].addEventListener('dblclick', function () {
//     document.querySelector('.cart').style.background = 'springgreen';
// })


// const items = document.getElementsByClassName("cart-item");
// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener('dblclick', function (e) {
//         console.log(e.target);
//     })
// }


// const items = document.getElementsByClassName("cart-item");
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }




//change product image
document.getElementById('phone').addEventListener('mouseover', function () {
    document.getElementById('phone').src = 'images/product-1-1.png';
})
document.getElementById('phone').addEventListener('mouseout', function () {
    document.getElementById('phone').src = 'images/product-1.png';
})

document.getElementById('case').addEventListener('mouseover', function () {
    document.getElementById('case').src = 'images/product-2-1.jpg';
})
document.getElementById('case').addEventListener('mouseout', function () {
    document.getElementById('case').src = 'images/product-2.png';
})





// background colour change
function changeShop() {
    // console.log("hello");
    window.location.href = "https://www.apple.com/";
}

// document.getElementById("change-shop").addEventListener("click", function (e) {
//     window.location.href = "https://www.apple.com/";
// })