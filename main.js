
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if(a.getAttribute("href") === "#" + current){
      a.classList.add("active");
    }
  });
});



const revealElements = document.querySelectorAll(".product, .offer-card, .cat, .about, .hero-text");

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);



const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

window.addEventListener("scroll", () => {
  if(window.scrollY > 400){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", () => {
  const orderSection = document.getElementById("order");
  orderSection.scrollIntoView({
    behavior: "smooth"
  });
});

orderBtn.addEventListener("click", () => {
  alert("Order Added Successfully 🍔");

  const orderSection = document.getElementById("order");
  orderSection.scrollIntoView({
    behavior: "smooth"
  });
});
let count = 0;
const cartCount = document.getElementById("cart-count");


const cartButtons = document.querySelectorAll(".product button");

cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    count++;
    cartCount.innerText = count;

    btn.innerText = "Added ✓";
    btn.style.background = "green";

    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "";
    }, 1200);
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});




