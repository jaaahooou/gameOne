import { Quote } from "./Quote.js";

class Game {
    currentStep = 0;
    lastStep = 7;


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
        if (this.quote.guess(letter)){
            this.drawQuote();
        }else{
           this.currentStep ++; 
           document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
           if(this.currentStep == this.lastStep){
               this.loosing();
           }
        };
        
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
        if(!content.includes('_')){
            this.winning();
        }
    }

    start(){
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();

      
        
    }

    winning(){
        this.wordWrapper.innerText = "Gratki, wygrywasz!";
        this.lettersWrapper.innerText = '';
    }

    loosing(){
        this.wordWrapper.innerText = "Niestety przegrywasz. Koniec gry";
        this.lettersWrapper.innerText = '';
    }
}

const game = new Game({
    lettersWrapper: document.getElementById("letters"),
    categoryWrapper: document.getElementById("category"),
    wordWrapper: document.getElementById("word"),
    outputWrapper: document.getElementById("output"),
  });
  
  game.start();

