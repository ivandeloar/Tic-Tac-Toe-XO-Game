const cells = document.querySelectorAll('.cell');
const messageElement = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;

function handleCellClick(index) {
    if (gameActive && !cells[index].textContent) {
        cells[index].textContent = currentPlayer;
        if (checkWin()) {
            messageElement.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if ([...cells].every(cell => cell.textContent)) {
            messageElement.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageElement.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
}

function restartGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    messageElement.textContent = `Player ${currentPlayer}'s turn`;
}

messageElement.textContent = `Player ${currentPlayer}'s turn`;
