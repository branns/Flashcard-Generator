var inquirer = require('inquirer');
var fs = require('fs');
var bCard = require('./BasicCard.js')
var cCard = require('./ClozeCard.js')

//function to read the data of the different files after new data has been added
function readFiles(type) {
        fs.readFile(type, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        }
        else {
          var flashCards = data.split(";");
          flashCards.length = flashCards.length - 1;
          console.log(type + "\n" + flashCards + "\n---------------\n");
        }
    });
}

//prompt that runs when the program is first loaded
inquirer.prompt([
   { 
    type: "list",
    message: "Which type of flash card would you like to make?",
    choices: ['basic', 'cloze'],
    name: 'flashcardType'
   }]).then(function(answer) {

      if (answer.flashcardType == 'basic') {
        basic();
      }
      else {
         cloze();
      }
   });

//section for promting the user for the basic card information
function basic() {
    console.log('basic');
    inquirer.prompt([{
        type: 'input',
        message: 'What is the title or name of this flashcard? (Ex: parrotsQuestion):',
        name: 'title'},
        {
        type: 'input',
        message: 'What is the question for the front of the card?',
        name: 'front'},
        {
        type: 'input',
        message: 'what is the answer for the back of the card?',
        name: 'back'
        }
    ]).then( function(answer) {
        var newBasicCard = new BasicCard(answer.title, answer.front, answer.back);       
    })
}

//section for prompting the user for cloze card information
function cloze() {
    console.log('cloze');
    inquirer.prompt([{
        type: 'input',
        message: 'What is the title of this flashcard?',
        name: 'title'},
        {
        type: 'input',
        message: 'What is the full text for the flashcard?',
        name: 'fullText'},
        {
        type: 'input',
        message: 'What is the cloze or word that is removed from the full text?',
        name: 'cloze'
        }
    ]).then( function(answer) {
        var newClozeCard = new ClozeCard(answer.title, answer.fullText, answer.cloze);
    });
}