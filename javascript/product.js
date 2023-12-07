let computerArray = [] 

//creating a constrcutor function 
function Computer(id,name,specs,price,url){
    this.id = id;
    this.name = name;
    this.specs = specs;
    this.price = price;
    this.url = url;
}

let computer1 = new Computer(1, "Cosair", "Intel Core i5 + GeForce RTX 4060 Gaming PC White", "R5,999", "https://i.postimg.cc/hvFN9dBw/2020-0813-P-Spectre-Tilt-Glass-2-2000x2000-compressed-74211-removebg-preview.png");

let computer2 = new Computer(2, "AMD","Ryzen 5 5600 Windows 11","R2,500","https://i.postimg.cc/wjWPwPzD/IMG-E3860-aee1846c-fcd2-4c6c-bc5a-a4a628d31873-removebg-preview.png");

let computer3 = new Computer(3, "CoolerMaster","Ryzen 5 5500 SCOUT Windows 11 Gaming PC","R6,899","https://i.postimg.cc/BZcmhyct/Periphio-Leviathan-Front-Left-Remote-compressed-29714-removebg-preview.png");

let computer4 = new Computer(4, "Gigabyte","AORUS C500","R4,999","https://i.postimg.cc/tJ2t9K25/Signature-Product-Photo1-800x-removebg-preview.png");

let computer5 = new Computer(5, "Intel Core i5","16GB 1TB Nvidia RTX 40 Series Gaming","R4,599","https://i.postimg.cc/rpNd6ShG/sudsterr-rtx-3070-prebuilt-gaming-pc-type-2-899744-removebg-preview.png");

let computer6 = new Computer(6, "COSAIR","Performance Plus Core I5 4060Ti Gaming PC","R6,499", "https://i.postimg.cc/grbdk7jx/SY-PCBuild-Pink-Odyssey-Airflow-removebg-preview-1.png");

computerArray.push(computer1,computer2,computer3,computer4,computer5,computer6);

localStorage.setItem("computer", JSON.stringify(computerArray));



 computerArray = JSON.parse(localStorage.getItem('computer'));

let mainContent = document.querySelector('.gridContainer')

window.onload = function () {
    let products = computerArray.map(function (item, index) {
        return `
        
    <div class="card-content h-100 z-n1 m-4 ">
      <img src="${item.url}" class="card-img-top" alt="...">
      <div class="card-body text-white text-center text-wrap>
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.specs}</p>
        <p class"price">${item.price}</p>
      </div>
    </div>

        `;
    })


    mainContent.innerHTML = products.join('')
}



// this.id = id;
// this.name = name;
// this.specs = specs;
// this.price = price;
// this.url = url;
