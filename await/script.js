productsGet();
// button1();
async function productsGet() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  data = "";
  for (let i = 0; i < products.length; i++) {
    data += `
    <div class="col">
    <p> </p>
    <div class="card shadow-sm">
     <img height="355px" width="320px" src="${products[i].image}">
      <div class="card-body">
        <p class="card-text" > ${products[i].title}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
       
            <button onclick="data_getir(${products[i].id})" id="button1" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button " class="btn btn-sm btn-outline-secondary">
               View     
            </button>        
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div><small class="text-muted">${products[i].price} $</small></div>
      </div>
    </div>
  </div> `;
  }

  document.querySelector("#prod").innerHTML = data;
}

function data_getir(id) {
  fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
    response.json().then((data) => {
      document.querySelector("#modal").innerHTML = `
    <div>
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${data.title} </h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div> 
 
    <div class="modal-body">
    <p>${data.description}</p>
    <p>${data.category}</p>
    <p>${data.rating.count}</p>
    <p id="starts" ></p>
     
      </div>
   
    `;

      let rate_length = Math.round(data.rating.rate);

      let start = ``;
      for (let i = 0; i < rate_length; i++) {
        start += `<i class="fa-regular fa-star"></i>`;
      }
      document.querySelector("#starts").innerHTML = start;
      console.log(start);
    })
  );
}

 
navbarDropdown.addEventListener('click', ()=>{
  fetch('https://fakestoreapi.com/products/categories').then(response =>{
    response.json().then(data =>{

      let data_al = ``;

      for (let i = 0; i < data.length; i++) {
        data_al += `<li><a class="dropdown-item" href="#">${data[i]}</a></li>`
        document.querySelector('#ulli').innerHTML = data_al;
      }
    })
  }) 
})