//     let ID = document.getElementById("id").value;
//     let catergory = document.getElementById("catergory").value;
//     let Image = document.getElementById("image").value;
//     let name = document.getElementById("name").value;
//     let price = document.getElementById("price").value;
//     let quantity = document.getElementById("quantity").value;

//     if (ID == ""){
//         alert("required");
//         return false
//     }else if(ID > 0){
//         alert("required");
//     }

//     if(catergory == ""){
//         alert("Required ")
//         return false;
//     }

//     if(Image == ""){
//         alert("Required ")
//         return false;
//     }

//     if(name == ""){

//         alert("Required ")
//         return false;
//     }

//     if (price == ""){
//         alert("required");
//         return false
//     }else if(price> 0){
//         alert("required");
//     }
//      if (quantity == ""){
//         alert("required");
//         return false
//     }else if(quantity > 0){
//         alert("required");
//     }
//    return true;

// const products = [
//     {
//       id: 1,
//       catergory: "rolex",
//       Image:
//         "https://i.postimg.cc/c17B47Z5/m126506-0001-collection-upright-portrait-2-removebg.png",
//       name: "Rolex GMT-Master 'Root Beer'",
//       desc: "",
//       price: "160000",
//       quantity: 5,
//     },
//     {
//       id: 2,
//       catergory: "rolex",
//       Image:
//         "https://i.postimg.cc/xCbT4JvN/m126233-0039-collection-upright-landscape-removebg-preview.png",
//       name: "Rolex Oyster Perpetual",
//       price: "78000",
//       quantity: 5,
//     },
//     {
//       id: 3,
//       catergory: "rolex",
//       Image: "https://i.postimg.cc/kG3X3Js1/m126234-0051-collection-upright-portrait-1-removebg-preview.png",
//       name: "Rolex DateJust 40mm",
//       price: "185000",
//       quantity: 5,
//     },
//     {
//       id: 4,
//       catergory: "rolex",
//       Image:
//         "https://i.postimg.cc/vTr8GJSQ/m226658-0001-collection-upright-portrait-removebg-preview.png",
//       name: "Rolex Oyster Flex ",
//       price: "300000",
//       quantity: 5,
//     },
//     {
//       id: 5,
//       catergory: "rm",
//       Image:
//         "https://i.postimg.cc/P5JWqH1f/MG-5771-front-3-1-1-1.png",
//       name: `RM-13-05`,
//       price: `4000000`,
//       quantity: 5,
//     },
//     {
//       catergory: "rm",
//       id: 6,
//       Image:
//         "https://i.postimg.cc/j50PvJmC/richard-mille-rm-11-02-chronograph-scaled-1200x1200-cropped-removebg-preview.png",
//       name: `RM-11-02`,
//       price: `2000000`,
//       quantity: 5,
//     },
//     {
//       catergory: "rm",
//       id: 7,
//       Image:
//         "https://i.postimg.cc/QCj5ZZX3/richard-mille-rm011-fm-titanium.png",
//       name: `RM-11-FM`,
//       price: `2400000`,
//       quantity: 5,
//     },
//     {
//       catergory: "rm",
//       id: 8,
//       Image:
//         "https://i.postimg.cc/43hpz18r/RM-17-01-removebg-preview.png",
//       name: `RM-17-01`,
//       price: `5000000`,
//       quantity: 5,
//     },
//     {
//       id: 9,
//       catergory: "AP",
//       Image: "https://i.postimg.cc/bv502wQN/standup-png-transform-approductmain.png",
//       name: `AP Royal Oak Open Works`,
//       price: `2500000`,
//       quantity: 5,
//     },
//     {
//       id: 10,
//       catergory: "AP",
//       Image:
//         "https://i.postimg.cc/y8vysPxR/images-removebg-preview-1.png",
//       name: `AP Offshore`,
//       price: `430000`,
//       quantity: 5,
//     },
//     {
//       id: 11,
//       catergory: "AP",
//       Image: "https://i.postimg.cc/s2x9XhGN/audemars-piguet-black-panther-flying-tourbillon-royal-oak-42000000-26620ioood077ca0142000000-removeb.png",
//       name: `AP Concepts Black Panther`,
//       price: `5000000`,
//       quantity: 5,
//     },
//     {
//       id: 12,
//       catergory: "AP",
//       Image:
//         "https://i.postimg.cc/W12wBKNj/26331-OR-OO-1220-OR-01-1ff538b3-75e0-4a82-9bbc-320caa604753-removebg-preview.png",
//       name: `AP Royal Oak`,
//       price: `1200000`,
//       quantity: 5,
//     },
//     {
//       id: 13,
//       catergory: "PP",
//       Image: "https://i.postimg.cc/ncgfhvWX/5227-J-001-1-removebg-preview.png",
//       name: `Patek Phillipe Geneve`,
//       price: `180000`,
//       quantity: 5,
//     },
//     {
//       id: 14,
//       catergory: "PP",
//       Image:
//              "https://i.postimg.cc/N0wh1QBY/5740-1-G-001-1-removebg-preview.png",
//       name: `Nautilus`,
//       price: `2300000`,
//       quantity: 5,
//     },{
//       id: 15,
//       catergory: "PP",
//       Image: "https://i.postimg.cc/xdGw5B1m/6002-R-001-1-1-removebg-preview.png",
//       name: `Grand Complication`,
//       price: `10000000`,
//       quantity: 5,
//     },
//     {
//       id: 16,
//       catergory: "PP",
//       Image:
//         "https://i.postimg.cc/mg9fzPx8/GT-AUS-removebg-preview.png",
//       name: `WordTime "Australia"`,
//       price: `8000000`,
//       quantity: 5,
//     },
//   ];

//   function displayProducts(products) {
//     const ourProducts = document.getElementById("products");
//     ourProducts.innerHTML = "";
//     products.forEach((product) => {
//       const productElement = document.createElement("tbody");
//       productElement.innerHTML = `
//       <tr>
//       <td>${products.id}</td>
//       <td>${products.catergory}</td>
//       <td>${products.Image}</td>
//       <td>${products.name}</td>
//       <td>${products.price}>
//       <td>${products.quantity}</td>
//       <td><div class="btn">Edit</div><div class="btn">Delete</div></td>
//   </tr>

//       </tbody>`
//       ourProducts.appendChild(productElement);
//     });
//   }
// let array2 = JSON.parse(localStorage.getItem("products")) 
// if  (!array2){
//   array2 = [];
// };

// function addObject() {
//   let Value = {
//     id: document.getElementById("Id").value,
//     catergory: document.getElementById("catergory").value,
//     Image: document.getElementById("Image").value,
//     name: document.getElementById("name").value,
//     price: document.getElementById("price").value,
//     quantity: document.getElementById("quantity").value,
 
//   };
//   array2.push(Value);
//   //   document.getElementById("display1").innerHTML += Object.values(Value);
//   console.log(array2);
//   function display1(){

//   }
// }

// function display() {

//   let table = document.querySelector(".tableInfo");
//   table.innerHTML = "";
//   array2.forEach((data) => {
//     table.innerHTML += `
//     <tbody>
//     <tr>
//       <td>${data.id}</td>
//       <td>${data.catergory}</td>
//       <td>${data.Image}</td>
//       <td>${data.name}</td>
//       <td>${data.price}</td>
//       <td>${data.quantity}</td>
//        <td><button>Edit</button><button>Delete</button></td>
//     </tr>
//     <tr>
//     </tbody>
//     `;
//   });
// }

// display();


// localStorage.setItem("products", JSON.stringify(products));
// function clear
// function restart() {
//   window.location.reload();
// }

// let array2 = JSON.parse(localStorage.getItem("products"));
// if (!array2) {
//   array2 = [];
// }

// function addObject() {
//   let Value = {
//     id: document.getElementById("Id").value,
//     catergory: document.getElementById("catergory").value,
//     Image: document.getElementById("Image").value,
//     name: document.getElementById("name").value,
//     price: document.getElementById("price").value,
//     quantity: document.getElementById("quantity").value,
//   };
//   if (Value){
//     array2.push(Value);
//     localStorage.setItem("products", JSON.stringify(array2));
//     console.log(array2);
//     window.location.reload();

//   } else {
//     alert("Please add something")
//   }



// }

// function display() {
//   let table = document.querySelector(".tableInfo");
//   table.innerHTML = "";
//   array2.forEach((data) => {
//     table.innerHTML += `
//       <tbody>
//         <tr>
//           <td>${data.id}</td>
//           <td>${data.catergory}</td>
//           <td>${data.Image}</td>
//           <td>${data.name}</td>
//           <td>${data.price}</td>
//           <td>${data.quantity}</td>
//           <td><button>Edit</button><button>Delete</button></td>
//         </tr>
//       </tbody>
//     `;
//   });
  
// }

// display();

//localStorage.setItem("products", JSON.stringify(products));


let array2 = JSON.parse(localStorage.getItem("products"));
if (!array2) {
  array2 = [];
}

function addObject() {
  let Value = {
    id: document.getElementById("Id").value,
    catergory: document.getElementById("catergory").value,
    Image: document.getElementById("Image").value,
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
  };
  array2.push(Value);
  localStorage.setItem("products", JSON.stringify(array2));
  console.log(array2);
  displayRow(Value);
}

function display() {
  let table = document.querySelector(".tableInfo");
  table.innerHTML = "";
  array2.forEach((data) => {
    table.innerHTML += `
      <tbody>
        <tr>
          <td>${data.id}</td>
          <td>${data.catergory}</td>
          <td>${data.Image}</td>
          <td>${data.name}</td>
          <td>${data.price}</td>
          <td>${data.quantity}</td>
          <td>
            <button onclick="editObject(this)">Edit</button>
            <button onclick="deleteObject(this)">Delete</button>
          </td>
        </tr>
      </tbody>
    `;
  });
}

function displayRow(data) {
  let table = document.querySelector(".tableInfo");
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${data.id}</td>
    <td>${data.catergory}</td>
    <td>${data.Image}</td>
    <td>${data.name}</td>
    <td>${data.price}</td>
    <td>${data.quantity}</td>
    <td>
      <button onclick="editObject(this)">Edit</button>
      <button onclick="deleteObject(this)">Delete</button>
    </td>
  `;
  table.appendChild(newRow);
}

function deleteObject(button) {
  let row = button.parentNode.parentNode;
  let index = Array.from(row.parentNode.children).indexOf(row);
  array2.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(array2));
  row.remove();
}

function editObject(){
  let row = button.parentNode.parentNode;
  let index = Array.from(row.parentNode.children).indexOf(row);
  let product = array2[index]

  document.getElementById("id").value = product.id
  document.getElementById("catergory").value = product.id
  document.getElementById("Image").value = product.id
  document.getElementById("name").value = product.id
  document.getElementById("price").value = product.id
  document.getElementById("quantity").value = product.id
  
  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.onclick = function () {
    saveChanges(index);


  };

  let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = function () {
      cancelEdit(row, product);
    };
    let cell = row.lastElementChild;
    cell.innerHTML = "";
    cell.appendChild(saveButton);
    cell.appendChild(cancelButton);
  }

  function saveChanges(index){
  let editedProduct = new Product(
    document.getElementById("Id").value,
    document.getElementById("category").value,
    document.getElementById("Image").value,
    document.getElementById("name").value,
    document.getElementById("price").value,
    document.getElementById("quantity").value
  )
  array2[index] = editedProduct;
  localStorage.setItem("products", JSON.stringify(array2));
  display();

  }
  function cancelEdit(row, product) {
    let cell = row.lastElementChild;
    cell.innerHTML = `
      <button onclick="editObject(this)">Edit</button>
      <button onclick="deleteObject(this)">Delete</button>
    `;
  
    document.getElementById("Id").value = "";
    document.getElementById("category").value = "";
    document.getElementById("Image").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
  }

display();
