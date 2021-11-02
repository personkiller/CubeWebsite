let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  if (card.dataset.link == "") return;
  card.addEventListener("click", () => {
    window.location = card.dataset.link;
  });
});