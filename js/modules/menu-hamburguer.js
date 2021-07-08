const d = document;

export default function menuHamburguer() {
  const $hamburguer = d.querySelector(".menu-hamburguer"),
    $menu = d.querySelector(".menu"),
    $overlay = d.querySelector(".overlay");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-hamburguer") || e.target.matches(".menu-hamburguer *")) {
      $hamburguer.classList.toggle("is-active");
      $menu.classList.toggle("is-active");
      $overlay.classList.toggle("is-active");
      d.body.classList.toggle("no-scroll");
    }

    if (e.target.matches(".menu-link")) {
      $hamburguer.classList.remove("is-active");
      $menu.classList.remove("is-active");
      $overlay.classList.remove("is-active");
      d.body.classList.remove("no-scroll");
    }
  });
}
