let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".new-game");
let resetGameBtn = document.querySelector(".reset-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let moveCount = 0; 

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    moveCount = 0; 
    enableBoxes();
    msgContainer.classList.add("hide");
    newGameBtn.style.display = "none";
};

const newGame = () => {
    turnO = true;
    moveCount = 0; 
    enableBoxes();
    msgContainer.classList.add("hide");
    newGameBtn.style.display = "none";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        moveCount++;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; 
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner} 🎉`;
    msgContainer.classList.remove("hide");
    newGameBtn.style.display = "block";
    disableBoxes();
};

const showDraw = () => {
    msg.innerText = "It's a Draw! 🤝";
    msgContainer.classList.remove("hide");
    newGameBtn.style.display = "block";
    disableBoxes();
};

let checkWinner = () => {
    let winnerFound = false;

    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                winnerFound = true;
                return; 
            }
        }
    }

    
    if (!winnerFound && moveCount === 9) {
        showDraw();
    }
};

msgContainer.classList.add("hide");
newGameBtn.addEventListener("click", newGame);
resetGameBtn.addEventListener("click", resetGame);
newGameBtn.style.display = "none";

msg.innerText = "";