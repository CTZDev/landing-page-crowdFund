const d = document;

export default function modalActive() {
  //Radio buttons - Values
  const $radModal = d.querySelectorAll("input[name='radModal']"),
    $modalTransact = d.querySelectorAll(".modal-body-transact"),
    $articleModal = d.querySelectorAll(".modal-body-article[data-dialog]");

  //Modals - values
  const $openModals = d.querySelectorAll("[data-open]"),
    $closeModals = d.querySelectorAll("[data-close]");

  //RadiButtons Interaction
  $radModal.forEach((rad, i) => {
    rad.addEventListener("click", (e) => {
      $modalTransact.forEach((transact) => {
        transact.classList.remove("is-active");
      });

      if ($modalTransact[i - 1] !== undefined) {
        $modalTransact[i - 1].classList.add("is-active");
      }

      $articleModal.forEach((article) => {
        article.classList.remove("is-active");
      });
      $articleModal[i].classList.add("is-active");
    });
  });

  //Modal Global Interactions
  //Open Modal
  for (const modal of $openModals) {
    modal.addEventListener("click", function () {
      //Clear all the modals
      const $activeModal = d.querySelectorAll(".modal.is-visible");
      if ($activeModal.length > 0) {
        $activeModal[0].classList.remove("is-visible");
      }
      //Open modal selected
      const $modalId = this.dataset.open;
      d.getElementById($modalId).classList.add("is-visible");
    });
  }

  //Close Modal
  for (const modal of $closeModals) {
    modal.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove("is-visible");
    });
  }
  //Close Modal , when clicking outside the modal it closes
  d.addEventListener("click", (e) => {
    if (e.target === d.querySelector(".modal.is-visible")) {
      d.querySelector(".modal.is-visible").classList.remove("is-visible");
    }
  });

  //With key "Esc"
  d.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && d.querySelector(".modal.is-visible")) {
      d.querySelector(".modal.is-visible").classList.remove("is-visible");
    }
  });
}

//SOLO FALTA CERRAR EL DEL FONDO CUANDO SE ACTIVE EL DEL CHECK
