#!/usr/bin/env node

import {rps, help, rules} from "../lib/rpsls.js"
import minimist from "minimist";
const args = minimist(process.argv.slice(2),{
    alias: {
        r: "rules"
    }
});

//add help + rules calling

//play the game

//edge case: make sure result defined
