#!/usr/bin/node

import fs from "fs";
import path from "path";
import { Instruction, InstructionName } from "./types";

if (process.argv.length == 2) {
  console.log("You need to specify the path to the file to be executed");
  process.exit(1);
}

const filename = path.join(process.cwd(), process.argv[2]);

const file = fs.readFileSync(filename, "utf-8");

const lines = file.split(/\r?\n/);

const regex: RegExp = RegExp(/([0-9]+)\s([A-Z]{3}).*/);

const sinstructions = lines.filter((value: string) => {
  return regex.test(value);
});

const instructions: Instruction[] = Array<Instruction>(sinstructions.length);

sinstructions.forEach((value: string) => {
  //TODO convert to ast
});

//TODO execute ast
