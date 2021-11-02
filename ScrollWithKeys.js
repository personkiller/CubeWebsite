let numberViewed = 1;

window.addEventListener("click", (e) => {
  numberViewed < 10 ? numberViewed++ : (numberViewed = 0);
  cards[numberViewed].scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
});