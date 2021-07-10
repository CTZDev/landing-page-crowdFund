import bookMark from "./modules/bookmarked.js";
import menuHamburguer from "./modules/menu_hamburguer.js";
import modalActive from "./modules/modal_active.js";

document.addEventListener("DOMContentLoaded", (_) => {
  menuHamburguer();
  bookMark();
  modalActive();
});
