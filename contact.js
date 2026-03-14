var menuicon = document.getElementById("menuicon")
var closeicon = document.getElementById("closeicon")
var sidenav = document.getElementById("sidenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0   
})

closeicon.addEventListener("click",function(){
    sidenav.style.right="-50%"
})