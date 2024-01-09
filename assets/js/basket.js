const div = document.getElementById('productsListx')

function getProducts () {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item,index )=> {
        const box = document.createElement('div')
        box.className = "boxDiv col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
        box.innerHTML =`
        
        
        
        <img src="${item.image}" alt="">
        <p class="title">${item.title}</p>
        <p class="price">${item.price}</p>
        <button onclick="removeItem(${index})">Remove from cart</button>

        `
        div.appendChild(box)
    })
}

function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}


   getProducts()





   document.addEventListener("DOMContentLoaded", function() {
    const sortDiv = document.getElementById('sortDiv');
    const max = document.getElementById('max');
    const min = document.getElementById('min');
    max.addEventListener('click', maxFunc);
    min.addEventListener('click', minFunc);

    function maxFunc() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let data = [...cart]; 
        data.sort((a, b) => a.price - b.price);
        displayData(data);
    }

    function minFunc() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let data = [...cart]; 
        data.sort((a, b) => b.price - a.price);
        displayData(data);
    }

    function displayData(data) {
        sortDiv.innerHTML = '';
        data.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'boxlist col-xl-4 col-md-6 col-12';
            div.innerHTML = `
                <div class="boxListDiv">
                    <img src="${item.image}" alt="">
                    <h5>${item.name}</h5>
                    <p>${item.title}</p>
                    <p>${item.price}</p>
                </div>`;
            sortDiv.appendChild(div);
        });
    }
});