const d = document;

export default function bookMark() {
  const $bookmark = d.querySelector(".btn-bookmark");
  const $bookmarkText = d.querySelector(".btn-bookmark span");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".btn-bookmark") || e.target.matches(".btn-bookmark *")) {
      if ($bookmarkText.textContent === "BookMark") {
        $bookmark.classList.add("is-active");
        $bookmarkText.textContent = "BookMarked";
      } else {
        $bookmark.classList.remove("is-active");
        $bookmarkText.textContent = "BookMark";
      }
    }
  });
}
