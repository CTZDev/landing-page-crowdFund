const d = document;

export default function modalActive() {
  const $radModal = d.querySelectorAll("input[name='radModal']"),
    $modalTransact = d.querySelectorAll(".modal-body-transact"),
    $articleModal = d.querySelectorAll(".modal-body-article[data-dialog]");

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
}
