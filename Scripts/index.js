let featured = [
    {
      id: 1,
      Image:
        "https://i.postimg.cc/c17B47Z5/m126506-0001-collection-upright-portrait-2-removebg.png",
      name: `Rolex`,
   
    },
  
    {
      id: 2,
      Image: "https://i.postimg.cc/g27vBNqr/standup-png-transform-approductmain.png",
      name: `Audemars Piguet`,
     
    },
  
    {
        id: 3,
        Image: "https://i.postimg.cc/tRF2nQdk/6002-R-001-1-removebg-preview.png",
        name: `Patek Philippe`,
       
      },
       
    {
        id: 4,
        Image: "https://i.postimg.cc/VkvqR3t3/richard-mille-rm011-fm-titanium.png",
        name: `Richard Mille`,
       
      },
  
  
  ];
  
  function appear(event){
  
  }
  
  let featureGroup = document.querySelector(".featured");
  featured.forEach((data) => {
    featureGroup.innerHTML += `<div class="card   mx-auto mt-5 " style="width:280px;   ">
      <img class="card-img-top" src="${data.Image}" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">${data.name}</h4>
        <a href="/Pages/products.html" class="">
        <div class=" btn-find-out-more">Find Out More</div>
        </a>
       
      </div>`;
  });