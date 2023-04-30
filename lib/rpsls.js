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
        rules();
        help();
        return;
    }
    const opponentChoice = options[Math.random() * (2 - 0 + 1) + 0];
    
    //add switch case to do lose, win, or tie
}

export function rpsls(playerChoice) {
    if (!expansionOptions.includes(playerChoice)) {
        console.error('${playerChoice} is not a valid choice! Please try again!')
        expansionRules();
        expansionHelp();
        return;
    }
    const opponentChoice = expansionOptions[Math.random() * (2 - 0 + 1) + 0];
}

//rules

export function rules() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    return;
}

export function expansionRules() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    return;
}

//help

export function help() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    return;
}

export function expansionHelp() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
    return;
}
