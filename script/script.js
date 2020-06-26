const foods = [
  {
    id: 100,
    name: "کباب سلطانی",
    price: 117000,
    img: "./img/soltani.jpg",
    alt: "soltani"
  },
  {
    id: 120,
    name: "پیتزا مخصوص",
    price: 22400,
    img: "./img/makhsos.jpg",
    alt: "makhsos"
  },
  {
    id: 130,
    name: "کوفته",
    price: 35000,
    img: "./img/kofteh.jpg",
    alt: "kofteh"
  },
  {
    id: 140,
    name: "قورمه سبزی",
    price: 37000,
    img: "./img/ghormeh.jpg",
    alt: "ghormeh"
  },
  {
    id: 150,
    name: "باقالی پلو",
    price: 17000,
    img: "./img/baghali.jpg",
    alt: "baghali"
  },
  {
    id: 160,
    name: "فسنجان",
    price: 35000,
    img: "./img/fesenjan.jpg",
    alt: "fesenjan"
  },
  {
    id: 170,
    name: "ماهیچه گوسفندی",
    price: 125000,
    img: "./img/mahiche.jpg",
    alt: "mahiche"
  },
  {
    id: 180,
    name: "ماهی قزل آلا",
    price: 31000,
    img: "./img/ghezel.jpg",
    alt: "ghezel"
  },
];

let cart = {
  items: [],
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
            <span>0</span>
          </div>
          <div class="plus-minus d-flex flex-column">
            <button id="plus"><i class="fas fa-plus"></i></button>
            <button id="minus"><i class="fa fa-minus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="price-container">
      <div class="price">0 تومان</div>
    </div>
  </div>`);
  });
}

renderAllFood();
