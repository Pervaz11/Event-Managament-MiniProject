// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

// console.log("ID:", id);

// if (!id) {
//     console.error("ID tapılmadı! URL düzgün deyil.");
// } else {
//     fetch('/products.json')
//         .then(response => response.json())
//         .then(products => {
//             const product = products.find(p => p.id == id);
//             console.log("Tapılan məhsul:", product);

//             if (product) {
                
//                 const imageHTML = document.querySelector("#productImg");
//                 if (imageHTML) {
//                     imageHTML.src = product.image;
//                 }

//                 const nameHTML = document.querySelector("#product-name");
//                 if (nameHTML) {
//                     nameHTML.textContent = product.name;
//                 }

//                 const dateHTML = document.querySelector("#product-date");
//                 if (dateHTML) {
//                     dateHTML.textContent = new Date(product.date).toLocaleString();
//                 }

//                 const locationHTML = document.querySelector("#product-location");
//                 if (locationHTML) {
//                     locationHTML.textContent = product.location;
//                 }

//                 const priceHTML = document.querySelector("#product-price");
//                 if (priceHTML) {
//                     priceHTML.textContent = `$${product.price.toFixed(2)}`;
//                 }

//                 const descriptionHTML = document.querySelector("#product-description");
//                 if (descriptionHTML) {
//                     descriptionHTML.textContent = product.description || "No description available.";
//                 }

//             } else {
//                 console.error("Məhsul tapılmadı!");
//             }
//         })
//         .catch(error => console.error("JSON yükləmə xətası:", error));
// }
