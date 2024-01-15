const fs= require('fs');
const readline = require('readline');

const readText = (question) => {
   return new Promise((resolve) => {
      readline.createInterface({
         input: process.stdin,
         output: process.stdout
      });
      readline.question(question, text => {
         readline.close();
         resolve(text);
      });
   });
};

let lista = [];
fs.readFile('dict.txt', (text) => {
   lista = text.split('\n');
});

readText("inserire la parola: ", (word) => {
   if (word.length >= 3) {
      const rima = word.slice(-3);
      lista.forEach((testWord) => {
         const test = testWord.slice(-3);
         if (rima === test) {
            console.log(testWord);
         }
      });
   }
});