const options = [
    "rock",
    "paper",
    "scissors"
];

const expansionOptions = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
];

export function rps(playerChoice) {
    if (!options.includes(playerChoice)) {
        console.error('${playerChoice} is not a valid choice! Please try again!')
    }
    const opponentChoice = options[Math.random() * (2 - 0 + 1) + 0];
}

export function rpsls(playerChoice) {
    const opponentChoice = expansionOptions[Math.random() * (2 - 0 + 1) + 0];
}
