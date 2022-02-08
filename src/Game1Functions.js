import React from 'react'
import { Button } from 'react-bootstrap';
import './styles.css';
import './index.css';
import ReactDOM from 'react-dom';
let APIkey = "";
let que = [{question:"Click on a category for a question."}];
let url = "https://opentdb.com/"
let streak = 0;
let vastasiOikein = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

        // Hakee vastaukset API:sta ja sekoittaa oikean vastauksen väärien sekaan
function HaeVastaukset(){               
    let arpa = getRandomInt(que[0].incorrect_answers.length+1); // Arpoo väärän vastauksen paikan
    let correctAnswer = <Button key="correct" onClick={youAreRight} variant="answer">{que[0].correct_answer}</Button>  // Oikea vastaus. 
    let kaikkiVastaukset = [];  // Luodaan Array kaikille vastauksille
    que[0].incorrect_answers.forEach(element => {       // Lisää väärät vastaukset nappeina Arrayhin
        const decodedString = parser.parseFromString(`<!doctype html><body>${element}`, 'text/html').body.textContent;  // Decodaa erikoismerkit
        let temp = <Button key={element} variant="answer" onClick={youAreWrong}>{decodedString}</Button>
        kaikkiVastaukset.push(temp);
       
    });        
    kaikkiVastaukset.splice (arpa, 0, correctAnswer);   // Laittaa oikean vastauksen arvottuun paikkaan väärien sekaan
    
    return ( kaikkiVastaukset  // Palauttaa vastaukset
    )
}

function vastasikoOikein(){
    if (vastasiOikein === false) {
        streak = 0 ;
    } else {
        vastasiOikein = false;
    }
}

function youAreRight(){
        streak = streak+1;
        vastasiOikein = true;
        const onnea = "Correct! Answer to a new question by clicking on a category. Your streak is now "+streak+" correct answers.";
        ReactDOM.render (onnea, document.getElementById("answerBlock"));
    
}

function youAreWrong(){
    streak = 0;
    const onnea = "Incorrect! Try again, by clicking on a category."
    ReactDOM.render (onnea, document.getElementById("answerBlock"));

}



async function getQuestionKey(){
    let response = await fetch(url+'api_token.php?command=request');
    let data = await response.json();
    
    APIkey = await data.token;
}
getQuestionKey();

async function questionGeo(){
    vastasikoOikein();
    let response = await fetch(url+'api.php?amount=1&category=22&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = HaeVastaukset()
    const decodedString = parser.parseFromString(`<!doctype html><body>${que[0].question}`, 'text/html').body.textContent;
    let kysymys = <h2>{decodedString}</h2>

    
    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionHis(){
    vastasikoOikein();
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=23&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = HaeVastaukset()
    const decodedString = parser.parseFromString(`<!doctype html><body>${que[0].question}`, 'text/html').body.textContent;
    let kysymys = <h2>{decodedString}</h2>

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionSci(){
    let categoryPicker = 0
    let randomNumber = getRandomInt(4)
    if (randomNumber === 0){            // Regular science
        categoryPicker = 17;
    } else if (randomNumber === 1){     // Computers n shit
        categoryPicker = 18;
    } else if (randomNumber === 2){     // Maths
        categoryPicker = 19;
    } else {                            // Gadgets
        categoryPicker = 30;
    }
    vastasikoOikein();
    let response = await fetch('https://opentdb.com/api.php?amount=1&category='+categoryPicker+'&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = HaeVastaukset()
    const decodedString = parser.parseFromString(`<!doctype html><body>${que[0].question}`, 'text/html').body.textContent;
    let kysymys = <h2>{decodedString}</h2>

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionEnt(){
    let categoryPicker = 0
    let randomNumber = getRandomInt(8)
    if (randomNumber === 0){            // Music
        categoryPicker = 12;
    } else if(randomNumber === 1){      // Film
        categoryPicker = 11;
    } else if(randomNumber === 2){      // Theater / Musical
        categoryPicker = 13;
    } else if(randomNumber === 3){      // TV
        categoryPicker = 14;
    } else if(randomNumber === 4){      // Gaming
        categoryPicker = 15;
    } else if(randomNumber === 5){      // Board Games
        categoryPicker = 16;
    } else if(randomNumber === 6){      // Anime / Manga
        categoryPicker = 31;
    } else {                            // Cartoon
        categoryPicker = 32;
    }
    vastasikoOikein();
    let response = await fetch('https://opentdb.com/api.php?amount=1&category='+categoryPicker+'&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = HaeVastaukset()
    const decodedString = parser.parseFromString(`<!doctype html><body>${que[0].question}`, 'text/html').body.textContent;
    let kysymys = <h2>{decodedString}</h2>

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionLit(){
    let categoryPicker = 0
    let randomNumber = getRandomInt(2)
    if (randomNumber === 0){            // Literature
        categoryPicker = 10;
    }  else {                           // Art
        categoryPicker = 25;
    }
    vastasikoOikein();
    let response = await fetch('https://opentdb.com/api.php?amount=1&category='+categoryPicker+'&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = HaeVastaukset()
    const decodedString = parser.parseFromString(`<!doctype html><body>${que[0].question}`, 'text/html').body.textContent;
    let kysymys = <h2>{decodedString}</h2>
    
   

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionSpo(){
    vastasikoOikein();
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=21&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = HaeVastaukset();
    const decodedString = parser.parseFromString(`<!doctype html><body>${que[0].question}`, 'text/html').body.textContent;
    let kysymys = <h2>{decodedString}</h2>
    
    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
    
}

const parser = new DOMParser();


const game1Functions = () => {
    
    return (
        
        <div className="game1container">
            <br />
            <div id="questionNav">
                <Button variant="geo" onClick={questionGeo}>Geography</Button>

                <Button variant="his" onClick={questionHis}>History</Button>

                <Button variant="sci" onClick={questionSci}>Science</Button>

                <Button variant="ent" onClick={questionEnt}>Entertainment</Button>

                <Button variant="lit" onClick={questionLit}>Art & Literature</Button>

                <Button variant="spo" onClick={questionSpo}>Sports & Leisure</Button>                
            </div>
            <br />
            
            <div id="questionBlock">
                
            </div>
            <br />
            <div id="answerBlock">

            </div>
            
        </div>


    )
}


export default game1Functions
