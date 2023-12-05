let computerArray = [] 

//creating a constrcutor function 
function Computer(id,name,specs,price,url){
    this.id = id;
    this.name = name;
    this.specs = specs;
    this.price = price;
    this.url = url;
}

let computer1 = new Computer(1, "Cosair", "Intel Core i5 + GeForce RTX 4060 Gaming PC White", 455, "https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer2 = new Computer(2, "AMD","Ryzen 5 5600 Windows 11","2500","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer3 = new Computer(3, "CoolerMaster","Ryzen 5 5500 SCOUT Windows 11 Gaming PC","6500","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer4 = new Computer(4, "Gigabyte","AORUS C500","4500","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer5 = new Computer(5, "Intel Core i5","16GB 1TB Nvidia RTX 40 Series Gaming","8500","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer6 = new Computer(6, " CORSAIR","Performance Plus Core I5 4060Ti Gaming PC","50000", "https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

computerArray.push(computer1,computer2,computer3,computer4,computer5,computer6);

localStorage.setItem("computer", JSON.stringify(computerArray));



 computerArray = JSON.parse(localStorage.getItem('computer'));

let mainContent = document.querySelector('main')

window.onload = function () {
    let products = computerArray.map(function (item, index) {
        return `
         
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

        ${item.name}
        ${item.specs}
        ${item.price}
        ${item.url}
        
        `;
    })


    mainContent.innerHTML = products.join('')
}
