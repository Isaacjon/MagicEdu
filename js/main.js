let loginIcon = document.querySelector(".fa-user-large");
// --------------------------------------------------------
let modal = document.querySelector(".login-register");
let closeModal = document.querySelectorAll(".closeModal");
// --------------------------------------------------------
let loginModal = document.querySelector(".login");
let registerModal = document.querySelector(".register");
// --------------------------------------------------------
let loginBtns = document.querySelectorAll(".loginBtn");
let registerBtns = document.querySelectorAll(".registerBtn");
// --------------------------------------------------------
let burger = document.querySelector(".burger-menu-icon");
let nav = document.querySelector(".side-nav");

burger.addEventListener("click", () => {
  console.log("burger");
  nav.classList.toggle("active");
});

loginIcon.addEventListener("click", () => {
  modal.classList.add("active");
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("login-register")) {
    modal.classList.remove("active");
  }
});

closeModal.forEach((el) =>
  el.addEventListener("click", () => {
    modal.classList.remove("active");
  })
);

loginBtns.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      registerModal.classList.remove("active");
      loginModal.classList.add("active");
    }
  });
});

registerBtns.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      loginModal.classList.remove("active");
      registerModal.classList.add("active");
    }
  });
});
