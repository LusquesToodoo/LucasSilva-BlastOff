const page = window.location.href.split("/");

if (page[page.length - 1] == "index.html") {
  const headerSearchInput = document.querySelector(".bg-header form input");
  const headerSearchButton = document.querySelector(".bg-header form button");
  const videoElements = document.querySelectorAll(".video-list-item");

  function filterVideos(e) {
    const searchWord = headerSearchInput.value.toLowerCase();
    videoElements.forEach((card) => {
      card.classList.remove("d-none");
      const cardName = card
        .querySelector(".card-title")
        .innerText.toLowerCase();
      cardName.indexOf(searchWord) != -1 ? "" : card.classList.add("d-none");
    });
  }

  headerSearchButton.addEventListener("click", filterVideos);
}
