let currentPlayer = 'X'; // Starting player
const boxes = document.querySelectorAll('.game'); // Select all game boxes

// Function to change the text in the clicked box
function change(event) {
    const boxText = event.target;

    // Only change if the box is empty
    if (boxText.textContent === '') {
        boxText.textContent = currentPlayer; // Set current player's symbol
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
        document.querySelector('.turn').textContent = `Turn for ${currentPlayer.toLowerCase()}`; // Update turn message
    }
}

// Add click event listeners to each box
boxes.forEach(box => {
    box.addEventListener('click', change);
});

// Reset game function
function resetGame() {
    boxes.forEach(box => {
        box.textContent = ''; // Clear all boxes
    });
    currentPlayer = 'X'; // Reset to starting player
    document.querySelector('.turn').textContent = `Turn for x`; // Reset turn message
}