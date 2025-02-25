let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector('.close');
let cartTab = document.querySelector(".cartTab");
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProduct = [];
let carts = JSON.parse(localStorage.getItem('cart')) || [];

iconCart.addEventListener('click', () => {
    cartTab.classList.toggle("showCart");
});
closeCart.addEventListener('click', () => {
    cartTab.classList.toggle("showCart");
});

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);

    if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }

    updateCartUI();
};

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
};

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProduct.length > 0) {
        listProduct.forEach(vproduct => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = vproduct.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <div class="product-container">
                    <div class="card">
                        <img src="${vproduct.image}" alt="${vproduct.name}">
                        <div class="prodcut-info">
                            <h2>${vproduct.name}</h2>
                            <p><i class="fa-regular fa-clock"></i><span>|</span>Wed, September 8, 2027, 12:00 AM</p>
                            <p><i class="fa-solid fa-location-dot"></i> <span>|</span> Fresno, California</p>
                            <div class="buy">
                                <button id="btn" class="button addCart">Add To Cart</button>
                                <span>$${vproduct.price}</span>
                            </div>
                        </div>
                    </div>
                </div>  
            `;
            listProductHTML.appendChild(newProduct);
        });
    }

    updateCartUI();
};

const updateCartUI = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;

    if (carts.length > 0) {
        carts.forEach(cartItem => {
            let product = listProduct.find(p => p.id == cartItem.product_id);
            if (product) {
                totalQuantity += cartItem.quantity;
                let cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.dataset.id = product.id;
                cartItemElement.innerHTML = `
                    <div class="product-container">
                        <div class="image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="name">
                            ${product.name}
                        </div>
                        <div class="price-container">
                            <div class="totalPrice">$${(product.price * cartItem.quantity).toFixed(2)}</div>
                            <div class="quantity">
                                <p class="min">-</p>
                                <span class="price-quantity">${cartItem.quantity}</span>
                                <p class="pls">+</p>
                            </div>
                        </div>
                    </div>
                `;
                listCartHTML.appendChild(cartItemElement);
            }
        });
    } else {
        listCartHTML.innerHTML = `<p>Your cart is empty!</p>`;
    }

    iconCartSpan.textContent = totalQuantity;
    addCartToMemory();
};

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let productItem = positionClick.closest('.item');
        let product_id = productItem ? productItem.dataset.id : null;

        addToCart(product_id);
        Swal.fire(`Product ${product_id} has been added to cart!`);
    }
});
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = carts[positionItemInCart];
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity += 1;
                break;

            case 'minus':
                let newQuantity = carts[positionItemInCart].quantity - 1;
                if (newQuantity > 0) {
                    carts[positionItemInCart].quantity = newQuantity;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    updateCartUI();
    addCartToMemory();
};

listCartHTML.addEventListener('click', (event) => {
    let target = event.target;
    let cartItem = target.closest('.cart-item');
    let product_id = cartItem ? cartItem.dataset.id : null;

    if (target.classList.contains('pls')) {
        changeQuantityCart(product_id, 'plus');
    } else if (target.classList.contains('min')) {
        changeQuantityCart(product_id, 'minus');
    }
});


const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;

    if (carts.length > 0) {
        carts.forEach(cartItem => {
            let product = listProduct.find(p => p.id == cartItem.product_id);
            if (product) {
                totalQuantity += cartItem.quantity;
                let cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.dataset.id = product.id;
                cartItemElement.innerHTML = `
                    <div class="product-container">
                        <div class="image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="name">
                            ${product.name}
                        </div>
                        <div class="price-container">
                            <div class="totalPrice">$${(product.price * cartItem.quantity).toFixed(2)}</div>
                            <div class="quantity">
                                <p class="min">-</p>
                                <span class="price-quantity">${cartItem.quantity}</span>
                                <p class="pls">+</p>
                            </div>
                        </div>
                    </div>
                `;
                listCartHTML.appendChild(cartItemElement);
            }
        });
    } else {
        listCartHTML.innerHTML = `<p>Your cart is empty!</p>`;
    }

    iconCartSpan.textContent = totalQuantity;
    addCartToMemory();
};



const initApp = () => {
    console.log('Fetching product.json...');
    fetch('products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('There was a problem with the network.');
            }
            return response.json();
        })
        .then(data => {
            listProduct = data;
            console.log('Products loaded:', listProduct);
            addDataToHTML();
        })
        .catch(error => {
            console.error("There was an error loading data:", error);
        });

    if (localStorage.getItem('cart')) {
        carts = JSON.parse(localStorage.getItem('cart'));
        updateCartUI();
    }
};

initApp();
