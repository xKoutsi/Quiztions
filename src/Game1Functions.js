import React from 'react'
import { Button } from 'react-bootstrap';
import './styles.css';
import './index.css';
import ReactDOM from 'react-dom';
let APIkey = "";
let que = [];
let url = "https://opentdb.com/"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
        // Hakee vastaukset API:sta ja sekoittaa oikean vastauksen väärien sekaan
function HaeVastaukset(){               
    let arpa = getRandomInt(que[0].incorrect_answers.length+1); // Arpoo väärän vastauksen paikan
    let correctAnswer = <Button onClick={youAreRight} variant="answer">{que[0].correct_answer}</Button>;  // Oikea vastaus. 
    let kaikkiVastaukset = [];  // Luodaan Array kaikille vastauksille
    que[0].incorrect_answers.forEach(element => {       // Lisää väärät vastaukset nappeina Arrayhin
        let temp = <Button variant="answer">{element}</Button>
        kaikkiVastaukset.push(temp);
    });        
    kaikkiVastaukset.splice (arpa, 0, correctAnswer);   // Laittaa oikean vastauksen arvottuun paikkaan väärien sekaan
    
    return ( kaikkiVastaukset  // Palauttaa vastaukset
    )
}


function youAreRight(){
    
        const onnea = "Correct! Answer to a new question by clicking on category."
        ReactDOM.render (onnea, document.getElementById("answerBlock"));
    
}

async function getQuestionKey(){
    let response = await fetch(url+'api_token.php?command=request');
    let data = await response.json();
    
    APIkey = await data.token;
}
getQuestionKey();

async function questionGeo(){
    let response = await fetch(url+'api.php?amount=1&category=22&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    const kaikkiVastaukset = <div>{HaeVastaukset()}</div>
    const kysymys = que[0].question

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionHis(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=23&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    const kaikkiVastaukset = <div>{HaeVastaukset()}</div>
    const kysymys = que[0].question

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionSci(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=17&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    const kaikkiVastaukset = <div>{HaeVastaukset()}</div>
    const kysymys = que[0].question

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionEnt(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=12&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    const kaikkiVastaukset = <div>{HaeVastaukset()}</div>
    const kysymys = que[0].question

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionLit(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=10&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    const kaikkiVastaukset = <div>{HaeVastaukset()}</div>
    const kysymys = que[0].question

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))
}

async function questionSpo(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=21&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    const kaikkiVastaukset = <div>{HaeVastaukset()}</div>
    const kysymys = <h2>{que[0].question}</h2>

    ReactDOM.render (kysymys, document.getElementById("questionBlock"))
    ReactDOM.render (kaikkiVastaukset, document.getElementById("answerBlock"))

}



const game1Functions = () => {
    return (
        
        <div className="game1container">
            <div id="questionButtons">
                <Button variant="geo" onClick={questionGeo}>Geography</Button>

                <Button variant="his" onClick={questionHis}>History</Button>

                <Button variant="sci" onClick={questionSci}>Science</Button>

                <Button variant="ent" onClick={questionEnt}>Entertainment</Button>

                <Button variant="lit" onClick={questionLit}>Art & Literature</Button>

                <Button variant="spo" onClick={questionSpo}>Sports & Leisure</Button>                
            </div>
            <div id="questionBlock">

            </div>
            <div id="answerBlock">

            </div>

        </div>


    )
}


export default game1Functions
