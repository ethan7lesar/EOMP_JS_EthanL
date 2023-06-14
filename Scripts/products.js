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
    // let total = cart.reduce((accumulate, product) => {
    //   let price = Number(product.price.replace("$", ""));
    //   return accumulate = price * quantity;
    // }, 0);
    totalElement.textContent = `$${total}`;
  }
  
  function checkout() {
    const modalFooter = document.querySelector(".modal-footer");
    modalFooter.innerHTML = `
    <div class="tick-animation" >
        <p>Checkout successful!</p>
      </div>
    `;
    cart = [];
    updateCart();
  }


  
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts(products);
  
  updateCart();
  