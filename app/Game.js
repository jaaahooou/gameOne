class Game {
    quotes = [{
        text: "Pan Tadeusz",
        category: "Utwór literacki"
    },
    {
        text: "Dupa Biskupa",
        category: "Gra karciana"
    },
    {
        text: "Jak trwoga to do loga",
        category: "Zmory programisty",

    },
    {
        text: "Mala Chinka",
        category: "Utwory muzyczne totalnie z dupy"
    },
    {
        text: "Jutro bedzie lepiej",
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


    }
    guess(letter){
        console.log(letter)
    }
    start(){

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
}

