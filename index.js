"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const YandexUtilties_1 = require("./yandex/YandexUtilties");
/**
 * Main method to initialize
 *
 */
let start = () => __awaiter(void 0, void 0, void 0, function* () {
    let wordCount = 0;
    let matches;
    let filePath = path.join(__dirname, './resources/big.txt');
    /*let readStream=fs.createReadStream(filePath);
    readStream.setEncoding("utf-8");
    readStream.on('data', (chunk)=>{
        data+=chunk;
        console.log('---Chunk'+chunk);
    });
    readStream.on('end',function() {
        //console.log(data);
     });
     readStream.on('error', function(err) {
        console.log(err.stack);
     });*/
    //Counting the word occurances in file 
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', (line) => {
        //To get the count of word 'text' with case in-sensitive
        matches = line.match(/text/i);
        if (matches !== null) {
            wordCount += matches.length;
        }
    });
    rl.on('pause', () => {
        console.log('Done!');
        console.log('Word Count for -> text : ' + wordCount);
    });
    //TextLookup from yandex dictionary with Synonyms and Past of Speech
    let textLookup = yield YandexUtilties_1.YandexUtilities.getDictionaryLookup("text");
    console.log("---TextLookup from yandex dictionary with Synonyms and Past of Speech---");
    console.log(JSON.stringify(textLookup));
});
start();
//# sourceMappingURL=index.js.map