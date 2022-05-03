// Targeting the button to run the swapping of the squares by using an Event Listener on button click
document.querySelector(".btn").addEventListener("click", swapSquares);

// Function for swapping squares by targeting the square container class from the HTML file and toggling the active class which swaps the positions
function swapSquares() {
  let squareContainer = document.querySelector(".square-container");
  squareContainer.classList.toggle("active");
}
