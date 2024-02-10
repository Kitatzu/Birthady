function flipContainer() {
  const textContainer = document.querySelector(".text_container");
  const imgContainer = document.querySelector(".birthday");

  textContainer.classList.add("flipped");
  imgContainer.classList.remove("hidden");
}
