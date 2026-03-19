let current=1
let total=6
let cartItems=0

function nextImage(){
current++
if(current>total) current=1
document.getElementById("mainImage").src="image0"+current+".jpg"
}

function prevImage(){
current--
if(current<1) current=total
document.getElementById("mainImage").src="image0"+current+".jpg"
}

function showPage(page){
let pages=document.querySelectorAll(".page")
pages.forEach(p=>p.classList.remove("active"))
document.getElementById(page).classList.add("active")
}

function changeQty(v){
let q=document.getElementById("qty")
let n=parseInt(q.innerText)
n+=v
if(n<1)n=1
q.innerText=n
}

function addCart(){
let qty=parseInt(document.getElementById("qty").innerText)
cartItems+=qty
document.getElementById("cartCount").innerText=cartItems
}

function checkout(){
document.getElementById("checkoutMessage").innerText=
"Sorry, it's so cool that it's out of stock. Try again later."
}