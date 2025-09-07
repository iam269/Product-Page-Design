
let productImg = document.getElementById("productImg");
let btns = document.querySelectorAll(".btn"); // presupunem că butoanele au clasa 'btn'

const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
];

btns.forEach((btn, idx) => {
    btn.onclick = function() {
        productImg.src = images[idx];
        btns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    }
});