import { Quote } from "./Quote.js";

class Game {
    quotes = [{
        text: "pan tadeusz",
        category: "Utwór literacki"
    },
    {
        text: "dupa biskupa",
        category: "Gra karciana"
    },
    {
        text: "jak trwoga to do loga",
        category: "Zmory programisty",

    },
    {
        text: "mala chinka",
        category: "Utwory muzyczne totalnie z dupy"
    },
    {
        text: "jutro bedzie lepiej",
        category: "Jak jutro nie bedzie?"
    }



];
    constructor({
        lettersWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper,
    }){

        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {text,category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerText = category;
        this.quote = new Quote(text);
        console.log(category);


    }
    guess(letter){
        console.log(letter)
    }
    drawLetters(){
        for (let i=0;i<26;i++){
            const label =(i+10).toString(36);
            const button = document.createElement('button');
            button.innerText = label;
            button.addEventListener('click',()=>{
                this.guess(label);
        })
            this.lettersWrapper.appendChild(button)
    }
}

    start(){
        this.drawLetters();
      
        
    }
}

const game = new Game({
    lettersWrapper: document.getElementById("letters"),
    categoryWrapper: document.getElementById("category"),
    wordWrapper: document.getElementById("word"),
    outputWrapper: document.getElementById("output"),
  });
  
  game.start();

