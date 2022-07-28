let products = [
        {
            id: 0,
            name: "Deluxe Bicycle",
            url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
            price: 499.98
        },
        {
            id: 1,
            name: "Super Deluxe bagpack",
            url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
            price: 134.99
        },
        {
            id: 2,
            name: "Super Duper Scooter",
            url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
            price: 1090.95
        },
        {
            id: 3,
            name: "Smartphone",
            url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
            price: 399.99
        }
    ];

// 4. The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the product and the price.
    (()=>{
     console.log(products)
      for(i=0; i< products.length; i++) {
        let container = document.getElementById("container");
        let adiv = document.createElement('div')
        let productNm =  document.createElement("h3");
        let productprc = document.createElement("h4");
        let productImg = document.createElement("img");
        let productBtn = document.createElement("button");
    
      let infor = document.createTextNode(products[i].name);
      productNm.appendChild(infor);

      let showPrice = document.createTextNode(products[i].price);
      productprc.appendChild(showPrice);


        productImg.setAttribute("src", products[i]["url"]);
        productImg.setAttribute("alt", products[i]["name"]);
        // productImg.appendChild(products[i]["url"]);
 let btninfo = document.createTextNode(`Buy ${products[i].name}`);
  productBtn.appendChild(btninfo);
adiv.appendChild(productNm);
adiv.appendChild(productprc);
adiv.appendChild(productImg);
adiv.appendChild(productBtn);
container.appendChild(adiv);




    //  // adiv.appendChild(infor);
    //  document.getElementById('container').appendChild(adiv);
    }

    })()