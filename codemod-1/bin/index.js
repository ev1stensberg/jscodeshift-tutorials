#!usr/bin/env node

const path = require("path");
const fs = require("fs");
const jscodeshift = require("jscodeshift");


const inputPath = path.join(process.cwd(), 'example.js');

const file = fs.readFileSync(inputPath, "utf8");

const ast = jscodeshift(file);

const source = ast.toSource();

const outputPath = path.join(process.cwd(), 'example_modded.js');

fs.writeFileSync(outputPath, source);