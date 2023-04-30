#!/usr/bin/env node

import {rps, help, rules} from "./lib/rpsls.js"
import minimist from "minimist";
const args = minimist(process.argv.slice(2),{
    alias: {
        r: "rules"
    }
});

//add help + rules calling
switch(true) {
    case (args.h || args.help):
        help();
        process.exit();
    case (args.r || args.rules):
        rules();
        process.exit()
    default:
        var playerChoice = args._[0];

        if (!playerChoice) {
            const result = { "player": "rock"};
            console.log(JSON.stringify(result));
            process.exit();
        }

        //play the game
        playerChoice = playerChoice.toLowerCase;
        const result = rps(playerChoice);

        //edge case: make sure result defined
        if (!(typeof result == "undefined")) {
            console.log(JSON.stringify(result));
            process.exit();
        }
        process.exit();
}





