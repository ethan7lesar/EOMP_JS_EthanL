

let array2 = JSON.parse(localStorage.getItem("products"));
if (!array2) {
  array2 = [];
}
function addObject() {
    let id = document.getElementById("Id").value;
    let category = document.getElementById("category").value;
    let image = document.getElementById("Image").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
  

    if (id === "" || category === "" || image === "" || name === "" || price === "" || quantity === "") {
      alert("Please fill in all the required fields.");
      return;
    } else if (id < 1 || category === "" || image == " http" || name === "" || price < 1 || quantity < 1){
        alert("Please fill in all the required fields.");
        return;
    }


  
    let Value = {
      id: id,
      category: category,
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

display();
