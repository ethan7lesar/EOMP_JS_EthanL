

let array2 = JSON.parse(localStorage.getItem("products"));
if (!array2) {
  array2 = [];
}
function addObject() {
  
  let id = document.getElementById("Id").value;
  let catergory = document.getElementById("catergory").value;
  let image = document.getElementById("Image").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;

    if (id === "" || catergory === "" || image === "" || name === "" || price === "" || quantity === "") {
      alert("Please fill in all the required fields.");
      return;
    } 

  
    let Value = {
      id: id,
      catergory: catergory,
      Image: image,
      name: name,
      price: price,
      quantity: quantity,
    };
    array2.push(Value);
    localStorage.setItem("products", JSON.stringify(array2));
    display();
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
            <button onclick="editObject(${data.id})" id="edit-${data.id}">Edit</button>
            <button onclick="deleteObject(this)">Delete</button>
          </td>
        </tr>
      </tbody>
    `;
  });
}
function deleteObject(button) {
  let row = button.parentNode.parentNode;
  let index = Array.from(row.parentNode.children).indexOf(row);
  array2.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(array2));
  row.remove();
}
function editObject(id) {
  let product = array2.find((item) => item.id == id)
  
  document.getElementById("Id").value = product.id;
  document.getElementById("catergory").value = product.catergory;
  document.getElementById("Image").value = product.Image;
  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("quantity").value = product.quantity;
  let editedObj;

  // if (localStorage.getItem("products")) {
  //   editedObj = JSON.parse(localStorage.getItem("products"));
  // } else {
  //   editedObj = [];
  // }

  // document.getElementById("Id").value = array2[index].id;
  // document.getElementById("catergory").value = array2[index].catergory;
  // document.getElementById("Image").value = array2[index].Image;
  // document.getElementById("name").value = array2[index].name;
  // document.getElementById("price").value = array2[index].price;
  // document.getElementById("quantity").value = array2[index].quantity;

  // let updateButton = document.getElementById(`edit-${index + 1}`);
  // updateButton.addEventListener('click', () => {
  //   editedObj[index].id = document.getElementById("Id").value;
  //   editedObj[index].catergory = document.getElementById("catergory").value;
  //   editedObj[index].Image = document.getElementById("Image").value;
  //   editedObj[index].name = document.getElementById("name").value;
  //   editedObj[index].price = document.getElementById("price").value;
  //   editedObj[index].quantity = document.getElementById("quantity").value;

  //   localStorage.setItem("products", JSON.stringify(editedObj));
  //   display();
  // });
}

function saveData() {
  let Id = document.getElementById("Id").value
  let catergory = document.getElementById("catergory").value
  let Image = document.getElementById("Image").value
  let name = document.getElementById("name").value
  let price = document.getElementById("price").value
  let quantity = document.getElementById("quantity").value

  let product = array2.find((item) => item.id == Id)
  product.catergory = catergory
  product.image = Image
  product.name = name
  product.price = price
  product.quantity = quantity

  array2.splice(Id -1, 1, product)

  localStorage.setItem("products", JSON.stringify(array2))
  display();
}


display();

function handleFormSubmit(event) {
  try {
    event.addObject();

    // Get form values
    const name = event.target.name.value;
    const catergory = event.target.catergory.value;
    const price = parseFloat(event.target.price.value);

    // Create new product object
    const newProduct = {
      id: products.length + 1,
      name: name,
      catergory: catergory,
      price: price
    };

    // Add the new product to the array and update local storage
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    // Show product page to reflect the updated list
    display();
  } catch (error) {
    console.error('An error occurred while submitting the form:', error);
  }
}
