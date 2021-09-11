var readlineSync = require("readline-sync");
const log = console.log;
var chalk = require("chalk");
var score = 0;

console.log("HOW MUCH YOU KNOW ABOUT FC BARCELONA QUIZ")

var userName = readlineSync.question("\nEnter your Name: ");

log("Welcome " + userName + " to CULERS QUIZ  ")

log("\n*There are total ten questions." + "\n*For each correct answer you will get +2 points." + "\n*For each wrong answer -1 point will be reduced.");
log("====================================\n");

var questions = [
  {
    question : "Who is the top goal scorer for FC Barcelona?",
    options : ["Leo Messi", "L. Suarez", "T. Henry", "A. Griezmann"],
    answer : "Leo Messi"
  },

  {
    question : "Who is the player with most assists in the history of FC Barcelona?",
    options : ["L. Suarez", "Ronaldinho", "Leo Messi", "Neymar"],
    answer : "Leo Messi"
  },

  {
    question : "Barcelona were famous for playing which brand of football?",
    options : ["Attacking Football", "tiki-taka", "Defensive Football", "None of these"],
    answer : "tiki-taka"
  },

  {
    question : "Who is the most successfull Manager off FC Barcelona?",
    options : ["Pep Guardiola", "Alox Ferguson", "Luis Enrique","Ronald Koeman"],
    answer : "Pep Guardiola"
  },

  {
    question : "How many UCL did Barcelona win during Guardiola's time as a Manager?",
    options : ["Three", "One", "Four", "Two"],
    answer : "Two"
  },

  {
    question : "In which year did Barcelona won a sextuple?",
    options : ["2009", "2010", "2011", "2015"],
    answer : "2009"
  },

  {
    question : "Which golden trio finished first ,second and third at the ballon d'or and set a record?",
    options : ["Messi-Iniesta-Xavi", "Messi-Suarez-Neymar", "Messi-Iniesta-Neymar", "None of these"],
    answer : "Messi-Iniesta-Xavi"
  },

  {
    question : "What is FC Barcelona's Youth Academy called?",
    options : ["FCB Youth Academy", "La Masia", "FCB Jr.", "Barcelona B"],
    answer : "La Masia"
  },

  {
    question : "Whi is the current president of FC Barcelona?",
    options : ["Bartomeu", "Gerrard Pique", "Victor Font", "Joan Laporta"],
    answer : "Joan Laporta"
  },

  {
    question : "What is the name of FCB's stadium?",
    options : ["Camp Nou", "Santiago Bernabeu", "Old Trafford", "Estadi Johan Cruyff"],
    answer : "Camp Nou"
  }
]

function quiz(options, question, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question)
  
  if(options[userAnswer] === answer) {
    
    
    log(chalk.green("\n--Right--" + "\n"));
    score = score + 2;
    log(chalk.green("Current Score : " + score));
    log("===================================================");
    
    
  }
  else {
    log(chalk.red("\n--Wrong--" + "\n"));
    score = score - 1;
    log(chalk.red("Current Score : " + score));
    log("===================================================")
  }
}
var j=1;
for(var i=0; i<questions.length; i++) {
  log(chalk.bold("\nQuestion " + (j++)))
  quiz(questions[i].options, questions[i].question, questions[i].answer)
}

log(chalk.green("Final Score: " + score));