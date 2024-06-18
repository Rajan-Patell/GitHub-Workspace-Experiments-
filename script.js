// Function to dynamically add numbers 1 to 10 to the coin
function addNumbersToCoin() {
  const coinContainer = document.getElementById('coin-container');
  let currentNumber = 1;

  const changeNumber = () => {
    coinContainer.innerHTML = currentNumber;
    currentNumber = currentNumber < 10 ? currentNumber + 1 : 1;
  };

  // Initial display
  changeNumber();

  // Change the number every 3 seconds
  setInterval(changeNumber, 3000);
}

// Call the function when the window loads
window.onload = addNumbersToCoin;
