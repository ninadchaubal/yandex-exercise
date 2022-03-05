import fs = require("fs");
import path = require("path");
import readline = require('readline');
import { YandexUtilities } from './yandex/YandexUtilties';

/**
 * Main method to initialize
 * 
 */
let start = async () => {
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
    })

    rl.on('line', (line) => {
        //To get the count of word 'text' with case in-sensitive
        matches = line.match(/text/i);
        if (matches !== null) {
            wordCount += matches.length;
        }
    })

    rl.on('pause', () => {
        console.log('Done!');
        console.log('Word Count for -> text : ' + wordCount);
    })


    //TextLookup from yandex dictionary with Synonyms and Past of Speech
    let textLookup = await YandexUtilities.getDictionaryLookup("text");
    console.log("---TextLookup from yandex dictionary with Synonyms and Past of Speech---");
    console.log(JSON.stringify(textLookup));

}
start();
