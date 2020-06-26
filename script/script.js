const foods = [
  {
    id: 100,
    name: "کباب سلطانی",
    price: 117000,
    img: "./img/soltani.jpg",
    alt: "soltani",
    quantity: 0,
    total: 0,
  },
  {
    id: 120,
    name: "پیتزا مخصوص",
    price: 22400,
    img: "./img/makhsos.jpg",
    alt: "makhsos",
    quantity: 0,
    total: 0,
  },
  {
    id: 130,
    name: "کوفته",
    price: 35000,
    img: "./img/kofteh.jpg",
    alt: "kofteh",
    quantity: 0,
    total: 0,
  },
  {
    id: 140,
    name: "قورمه سبزی",
    price: 37000,
    img: "./img/ghormeh.jpg",
    alt: "ghormeh",
    quantity: 0,
    total: 0,
  },
  {
    id: 150,
    name: "باقالی پلو",
    price: 17000,
    img: "./img/baghali.jpg",
    alt: "baghali",
    quantity: 0,
    total: 0,
  },
  {
    id: 160,
    name: "فسنجان",
    price: 35000,
    img: "./img/fesenjan.jpg",
    alt: "fesenjan",
    quantity: 0,
    total: 0,
  },
  {
    id: 170,
    name: "ماهیچه گوسفندی",
    price: 125000,
    img: "./img/mahiche.jpg",
    alt: "mahiche",
    quantity: 0,
    total: 0,
  },
  {
    id: 180,
    name: "ماهی قزل آلا",
    price: 31000,
    img: "./img/ghezel.jpg",
    alt: "ghezel",
    quantity: 0,
    total: 0,
  },
];

let cart = {
  service: 20500,
  discount: 34000,
  totalValue: 0,
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function renderAllFood() {
  const foodItems = $("#food-selection-container");
  foodItems.html("");
  foods.forEach(function (food, index) {
    foodItems.append(`<div class="food d-flex justify-content-between align-items-center">
    <div class="food-info-container d-flex">
      <img src="${food.img}" alt="${food.alt}" class="food-img" />
      <div class="food-info d-flex flex-column">
        <div class="food-name">
          ${food.name}
        </div>
        <div class="food-price mb-2">
          ${numberWithCommas(food.price)}
        </div>
        <div class="count-container d-flex">
          <div id="count">
            <span id="quantity">${food.quantity}</span>
          </div>
          <div class="plus-minus d-flex flex-column">
            <button id="plus" onclick="addToCart(${
              food.id
            })"><i class="fas fa-plus"></i></button>
            <button id="minus" onclick="removeForCart(${
              food.id
            })"><i class="fa fa-minus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="price-container">
      <div id="price">${numberWithCommas(food.total)} تومان</div>
    </div>
  </div>`);
  });
}

renderAllFood();

function renderBillItems() {
  const bills = $("#bills");
  const order = $("#order");

  bills.html(`<div class="sum-container d-flex justify-content-between my-1">
  <div>جمع کل سفارشات</div>
  <div id="sum">${numberWithCommas(cart.totalValue)} تومان</div>
  </div>
  <div
    class="services-container d-flex justify-content-between my-1"
  >
    <div>حق سرویس و کارمزد</div>
    <div id="services">${numberWithCommas(cart.service)} تومان</div>
  </div>
  <div
    class="discount-container d-flex justify-content-between my-1"
  >
    <div>تخفیف</div>
    <div id="discount">0 تومان</div>
  </div>
  <div class="result-container d-flex justify-content-center">
    <div id="result"> ${numberWithCommas(cart.totalValue)} تومان</div>
  </div>`);

  order.html(`<div class="discount-code">
  <input
    class="input-discount"
    type="text"
    placeholder="کد تخفیف"
  />
  <button id="add-discount">
    <i class="fas fa-plus plus-discount"></i>
  </button>
  </div>
  <div class="submit-container">
    <button class="sub-btn">ثبت سفارش</button>
  </div>`);
}
renderBillItems();

function addToCart(id) {
  let sum = 0;
  let foodIndex = foods.findIndex((item) => {
    return item.id === id;
  });
  foods[foodIndex].quantity += 1;
  foods[foodIndex].total = foods[foodIndex].quantity * foods[foodIndex].price;
  foods.forEach((item) => {
    sum += item.total;
  });
  if(sum!==0){
    cart.totalValue = sum;
  }
  console.log(cart.totalValue);
  
  renderAllFood();
  renderBillItems();
}

function removeForCart(id) {
  let sum = 0;
  let foodIndex = foods.findIndex((item) => {
    return item.id === id;
  });
  if (foods[foodIndex].quantity > 0) {
    foods[foodIndex].quantity -= 1;
    foods[foodIndex].total = foods[foodIndex].quantity * foods[foodIndex].price;
    foods.forEach((item)=>{
      sum+=item.total;
    })
  }
  if(sum!==0){
    cart.totalValue = sum;
  }
  renderAllFood();
  renderBillItems();
}
