const button_pickanumber = document.getElementById("sriram");
const DrawnNumber = document.getElementById("result");
const boxItems = document.getElementById("LotteryContainerItems");
const tick = new Audio("mixkit-retro-game-notification-212.wav");
const winsound = new Audio("mixkit-winning-notification-2018.wav");
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];
button_pickanumber.addEventListener("click", function () {
  winsound.pause();
  winsound.currentTime = 0;
  for (i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("win");
    document.getElementById(i).classList.remove("highlightBox");
  }
  count = 0;
  const intervalId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    randomvalue = Math.ceil(Math.random() * 50);
    for (i = 1; i <= 50; i++) {
      if (i == randomvalue) {
        document.getElementById(randomvalue).classList.add("highlightBox");
      } else {
        document.getElementById(i).classList.remove("highlightBox");
      }
    }
    count++;
    if (count === 5) {
      tick.pause();
      clearInterval(intervalId);
      document.getElementById(randomvalue).classList.remove("highlightBox");
    }
  }, 1000);
  DrawnNumber.textContent = `please wait.....`;
  setTimeout(function () {
    winsound.play();
    let Draw = Math.ceil(Math.random() * 50);
    DrawnNumber.textContent = `Number drawn is ${Draw} and you have won ${
      gifts[Draw - 1]
    }`;
    document.getElementById(Draw).classList.add("win");
  }, 5000);
});
for (let i = 1; i <= 50; i++) {
  boxlogic = `<div class="box" id=${i}>${i}.${gifts[i - 1]}</div>`;
  console.log(boxlogic);
  boxItems.insertAdjacentHTML("beforeend", boxlogic);
}
