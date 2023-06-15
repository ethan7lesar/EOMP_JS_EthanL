

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
            <button onclick="editObject(this)">Edit</button>
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

function editObject(button) {
  //  id = `${data.id}`;
  //  catergory =`${data.id}`;
  //  image =`${data.id}` ;
  //  name =`${data.id}` ;
  //   price = `${data.id}`;
  //  quantity = `${data.id}`;


  
  //  array2.splice(index, 1);
  // localStorage.setItem("products", JSON.stringify(array2));
  // array2.push(index,1);

  let editedObj;
  if(localStorage.getItem("products")){
    editedObj = [];
  } else {
    editedObj = JSON.parse(localStorage.getItem("products"))
  }

 document.getElementById("id").value = array2[index].id
 document.getElementById("catergory").value = array2[index].catergory
 document.getElementById("id").value = array2[index].id
 document.getElementById("id").value = array2[index].id
  document.getElementById("id").value = array2[index].id
 document.getElementById("id").value = array2[index].id


  
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
