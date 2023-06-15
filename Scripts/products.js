const products = JSON.parse(localStorage.getItem("products")) || [
    {
      id: 1,
      catergory: "rolex",
      Image:
        "https://i.postimg.cc/c17B47Z5/m126506-0001-collection-upright-portrait-2-removebg.png",
      name: "Rolex GMT-Master 'Root Beer'",
      desc: "",
      price: "160000",
      quantity: 5,
    },
    {
      id: 2,
      catergory: "rolex",
      Image:
        "https://i.postimg.cc/xCbT4JvN/m126233-0039-collection-upright-landscape-removebg-preview.png",
      name: "Rolex Oyster Perpetual",
      price: "78000",
      quantity: 5,
    },
    {
      id: 3,
      catergory: "rolex",
      Image: "https://i.postimg.cc/kG3X3Js1/m126234-0051-collection-upright-portrait-1-removebg-preview.png",
      name: "Rolex DateJust 40mm",
      price: "185000",
      quantity: 5,
    },
    {
      id: 4,
      catergory: "rolex",
      Image:
        "https://i.postimg.cc/vTr8GJSQ/m226658-0001-collection-upright-portrait-removebg-preview.png",
      name: "Rolex Oyster Flex ",
      price: "300000",
      quantity: 5,
    },
    {
      id: 5,
      catergory: "rm",
      Image:
        "https://i.postimg.cc/P5JWqH1f/MG-5771-front-3-1-1-1.png",
      name: `RM-13-05`,
      price: `4000000`,
      quantity: 5,
    },
    {
      catergory: "rm",
      id: 6,
      Image:
        "https://i.postimg.cc/j50PvJmC/richard-mille-rm-11-02-chronograph-scaled-1200x1200-cropped-removebg-preview.png",
      name: `RM-11-02`,
      price: `2000000`,
      quantity: 5,
    },
    {
      catergory: "rm",
      id: 7,
      Image:
        "https://i.postimg.cc/QCj5ZZX3/richard-mille-rm011-fm-titanium.png",
      name: `RM-11-FM`,
      price: `2400000`,
      quantity: 5,
    },
    {
      catergory: "rm",
      id: 8,
      Image:
        "https://i.postimg.cc/43hpz18r/RM-17-01-removebg-preview.png",
      name: `RM-17-01`,
      price: `5000000`,
      quantity: 5,
    },
    {
      id: 9,
      catergory: "AP",
      Image: "https://i.postimg.cc/bv502wQN/standup-png-transform-approductmain.png",
      name: `AP Royal Oak Open Works`,
      price: `2500000`,
      quantity: 5,
    },
    {
      id: 10,
      catergory: "AP",
      Image:
        "https://i.postimg.cc/y8vysPxR/images-removebg-preview-1.png",
      name: `AP Offshore`,
      price: `430000`,
      quantity: 5,
    },
    {
      id: 11,
      catergory: "AP",
      Image: "https://i.postimg.cc/s2x9XhGN/audemars-piguet-black-panther-flying-tourbillon-royal-oak-42000000-26620ioood077ca0142000000-removeb.png",
      name: `AP Concepts Black Panther`,
      price: `5000000`,
      quantity: 5,
    },
    {
      id: 12,
      catergory: "AP",
      Image:
        "https://i.postimg.cc/W12wBKNj/26331-OR-OO-1220-OR-01-1ff538b3-75e0-4a82-9bbc-320caa604753-removebg-preview.png",
      name: `AP Royal Oak`,
      price: `1200000`,
      quantity: 5,
    },
    {
      id: 13,
      catergory: "PP",
      Image: "https://i.postimg.cc/ncgfhvWX/5227-J-001-1-removebg-preview.png",
      name: `Patek Phillipe Geneve`,
      price: `180000`,
      quantity: 5,
    },
    {
      id: 14,
      catergory: "PP",
      Image:
             "https://i.postimg.cc/N0wh1QBY/5740-1-G-001-1-removebg-preview.png",
      name: `Nautilus`,
      price: `2300000`,
      quantity: 5,
    },{
      id: 15,
      catergory: "PP",
      Image: "https://i.postimg.cc/xdGw5B1m/6002-R-001-1-1-removebg-preview.png",
      name: `Grand Complication`,
      price: `10000000`,
      quantity: 5,
    },
    {
      id: 16,
      catergory: "PP",
      Image:
        "https://i.postimg.cc/mg9fzPx8/GT-AUS-removebg-preview.png",
      name: `WordTime "Australia"`,
      price: `8000000`,
      quantity: 5,
    },
  ];
  
  function displayProducts(products) {
    const ourProducts = document.getElementById("products");
       
    ourProducts.innerHTML = ""; 
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
          <img src="${product.Image}" alt="${product.name}" id="product-imgs">
          <h3>${product.name}</h3>
          <p> R ${product.price}</p> 
          <h5 class="mb-0">
       
      </div>
    </div>      
          <button onclick="addToCart(${product.id})" class="addbtn mb-5">Add to cart</button>`;
      ourProducts.appendChild(productElement);
    });
  }

function sortProductsByCategory(category) {
    const sortedProducts = products.filter((product) => product.catergory === category);
    displayProducts(sortedProducts);
  }
  
const categoryButtons = document.querySelectorAll(".category-button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    sortProductsByCategory(category);
  });
});
  
  let cart = JSON.parse(localStorage.getItem("Products")) || [];
  
  function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
    }
  }
  
  function removeFromCart(index) {
    let removedProduct = cart.splice(index, 1)[0];
    removedProduct.quantity++;
    updateCart();
  }
  
  function updateCart() {
    const cartContainer = document.getElementById("cart-body");
    localStorage.setItem("Products", JSON.stringify(cart));
    cartContainer.innerHTML = "";
    cart.forEach((product, index) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
      <img src="${product.Image}" alt="${product.name}" id="product-imgs"  style="width:30px, height: 35px;">
          <span>${product.name}</span>
          <button onclick="removeFromCart(${index})" class="rembutton">✖</button>
          
          <p class="ms-5">Price: R ${product.price}</p>
        `;
      cartContainer.appendChild(cartItem);
    });
    calculateTotal();
  }
  
  function calculateTotal() {
    let totalElement = document.getElementById("total");
    let total = 0;
    cart.forEach((item) => {
      total += eval(item.price);
    });
 
    totalElement.textContent = `R${total}`;
  }
  
  function checkout() {
    const modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML = `
    <div class="tick-animation" >
        <p>Checkout successful!</p>
        <svg fill="#192a51 " height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#192a51 "><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1 c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256 S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315 c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047 C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256 c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687 c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064 C482.762,174.736,478.245,172.445,474.045,173.813z"></path> <path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161 c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344 s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75 c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663 c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411 c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314 c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037 s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728 c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978 S509.502,87.794,504.969,83.262z"></path> </g> </g></svg>
      </div>
    `;
    cart = [];
    updateCart();
  }


  localStorage.setItem("products", JSON.stringify(products));
  displayProducts(products);
  
  updateCart();
  