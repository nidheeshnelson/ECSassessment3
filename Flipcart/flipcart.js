
function prevSlide() {
  const slider = document.getElementsByClassName('slider');
  const cardWidth = document.getElementsByClassName('card').offsetWidth;
  const cardsMargin = 20;
  const scrollDistance = cardWidth[0] + cardsMargin;
  slider[0].scrollLeft -= scrollDistance;
}

function nextSlide() {
  const slider = document.getElementsByClassName('slider');
  const cardWidth = document.getElementsByClassName('card').offsetWidth;
  const cardsMargin = 20;
  const scrollDistance = cardWidth[0] + cardsMargin;
  slider[0].scrollLeft += scrollDistance;
}
function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}
function showSignup(event) {
  event.stopPropagation();
  document.getElementById("signupPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("signupPopup").style.display = "none";
}