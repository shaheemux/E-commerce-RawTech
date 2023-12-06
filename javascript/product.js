let computerArray = [] 

//creating a constrcutor function 
function Computer(id,name,specs,price,url){
    this.id = id;
    this.name = name;
    this.specs = specs;
    this.price = price;
    this.url = url;
}

let computer1 = new Computer(1, "Cosair", "Intel Core i5 + GeForce RTX 4060 Gaming PC White", "R5,999", "https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer2 = new Computer(2, "AMD","Ryzen 5 5600 Windows 11","R2,500","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer3 = new Computer(3, "CoolerMaster","Ryzen 5 5500 SCOUT Windows 11 Gaming PC","R6,899","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer4 = new Computer(4, "Gigabyte","AORUS C500","R4,999","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer5 = new Computer(5, "Intel Core i5","16GB 1TB Nvidia RTX 40 Series Gaming","R4,599","https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

let computer6 = new Computer(6, " CORSAIR","Performance Plus Core I5 4060Ti Gaming PC","R6,499", "https://i.postimg.cc/tgX5w8nK/asethic-pictures-of.jpg");

computerArray.push(computer1,computer2,computer3,computer4,computer5,computer6);

localStorage.setItem("computer", JSON.stringify(computerArray));



 computerArray = JSON.parse(localStorage.getItem('computer'));

let mainContent = document.querySelector('main')

window.onload = function () {
    let products = computerArray.map(function (item, index) {
        return `
        
         
 

        ${item.name}
        ${item.specs}
        ${item.price}
        ${item.url}
        
        `;
    })


    mainContent.innerHTML = products.join('')
}
