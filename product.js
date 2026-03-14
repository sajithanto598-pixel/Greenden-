// Navbar side menu functionality
var menuicon = document.getElementById("menuicon")
var closeicon = document.getElementById("closeicon")
var sidenav = document.getElementById("sidenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0"
})

closeicon.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


// Product Search Functionality
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")

// Get all product cards
var productlist = productcontainer.children

search.addEventListener("keyup", function (event) {

    var entered_value = event.target.value.toUpperCase()

    for (let count = 0; count < productlist.length; count++) {

        // Get product name
        var productname = productlist[count].querySelector("h3").textContent

        if (productname.toUpperCase().indexOf(entered_value) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }

    }

})