//SPA
function getCategories(x) {
    document.getElementById('homeKidz').classList.remove('activeTabKidz')
    document.getElementById('collectionKidz').classList.remove('activeTabKidz')
    document.getElementById('shoesKidz').classList.remove('activeTabKidz')
    document.getElementById('bootsKidz').classList.remove('activeTabKidz')
    document.getElementById('contactKidz').classList.remove('activeTabKidz')
    document.getElementById(x).classList.add("activeTabKidz")
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName('categoryKidz')[i].style.display = 'none';
    }
    for (var i = 0; i < document.getElementsByClassName(x).length; i++) {
        document.getElementsByClassName(x)[i].style.display = 'block';
    }
    console.log(x)
}

//Product Array
let listProduct = [
        {
            productName: 'Best Shoes',
            price: 60,
            image: "images/shoes-img4.png",
        },
        {
            productName: "Best Shoes",
            price: "400",
            image: "images/shoes-img5.png",
        },
        {
            productName: "Best Shoes",
            price: "50",
            image: "images/shoes-img6.png",
        },
        {
            productName: "Sports Shoes",
            price: "70",
            image: "images/shoes-img7.png",
        },
        {
            productName: "Sports Shoes",
            price: "100",
            image: "images/shoes-img8.png",
        },
        {
            productName: "Sports Shoes",
            price: "90",
            image: "images/shoes-img9.png",
        },
];

for (let i = 0; i < listProduct.length; i++) {
    var boxProduct = `<div class="col-sm-4">
    <div class="best_shoes">
        <p class="best_text">${listProduct[i].productName}</p>
        <div class="shoes_icon"><img src='${listProduct[i].image}'></div>
        <div class="star_text">
            <div class="left_part">
                <ul>
                    <li><a href="#"><img src="images/star-icon.png"></a></li>
                    <li><a href="#"><img src="images/star-icon.png"></a></li>
                    <li><a href="#"><img src="images/star-icon.png"></a></li>
                    <li><a href="#"><img src="images/star-icon.png"></a></li>
                    <li><a href="#"><img src="images/star-icon.png"></a></li>
                </ul>
            </div>
            <div class="right_part">
                <div class="shoes_price">$ <span style="color: #ff4e5b;">${listProduct[i].price}</span></div>
            </div>
        </div>
    </div>
</div>`

    if (listProduct[i].new === true) {
        document.getElementById("renderProduct").innerHTML += boxProductNew
    }
    else {
        document.getElementById("renderProduct").innerHTML += boxProduct
    }
    console.log(listProduct[i].name)
}