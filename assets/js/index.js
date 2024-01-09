const div = document.getElementById("productsList");
const btn = document.getElementById("pagi");

let page = 1;
let limit = 3;
let db = [];

async function getProducts() {
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data;

        data.forEach(item => {
            const box = document.createElement("div");
            box.className = "boxDiv col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p class="title">${item.title}</p>
            <p class="price">${item.price}</p>
                <button onclick="addToBasket(${item.id})">Add to basket</button>
            `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getProducts);

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedItem = db.find(item => item.id == id);
    cart.push(selectedItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = () => {
    getProducts();
};




const SrchBtn = document.getElementById('SrchBtn')
const inp = document.getElementById('inp')
const srchInp = document.getElementById('srchInp')




function getbyname() {
    div.innerHTML = "";
    axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?title=${inp.value}`)
        .then(response=>{
            let db = response.data
            db.forEach(item => {
                const box = document.createElement("div");
                box.className = "boxDivx col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
                box.innerHTML = `
                <img src="${item.image}" alt="">
                <p class="title">${item.title}</p>
                    <button onclick="addToBasket(${item.id})">Add to basket</button>
                `;
                div.appendChild(box);
            });
        })
       

}

SrchBtn.addEventListener("click", getbyname)















document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');
  console.log("salam");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('nameInput').value;
      const surnameInput = document.getElementById('surnameInput').value;
      const emailInput = document.getElementById('emailInput').value;
  
      axios.post("https://65675cba64fcff8d73103f34.mockapi.io/xpolee", {
        name: nameInput,
        surname: surnameInput,
        email: emailInput,
      })
      .then((response) => {
        console.log('Data sent:', response.data);
        form.reset(); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });