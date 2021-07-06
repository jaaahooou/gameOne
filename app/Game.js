import { Quote } from "./Quote.js";

class Game {
    currentStep = 0;
    lastStep = 8;


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
        event.target.disabled = true;
        this.quote.guess(letter);
        this.drawQuote();
    }
    drawLetters(){
        for (let i=0;i<26;i++){
            const label =(i+10).toString(36);
            const button = document.createElement('button');
            button.innerText = label;
            button.addEventListener('click',(event)=>{
                this.guess(label,event);
        })
            this.lettersWrapper.appendChild(button)
    }
    }

    drawQuote(){
        const content = this.quote.getContent();
        this.wordWrapper.innerText = content;
    }

    start(){
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();

      
        
    }
}

const game = new Game({
    lettersWrapper: document.getElementById("letters"),
    categoryWrapper: document.getElementById("category"),
    wordWrapper: document.getElementById("word"),
    outputWrapper: document.getElementById("output"),
  });
  
  game.start();

