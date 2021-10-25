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
function haeVastaukset(){               
    let arpa = getRandomInt(que[0].incorrect_answers.length+1);
    console.log(que[0].incorrect_answers.length);
    let correctAnswer = '<Button onClick="{youAreRight}" variant="success">'+que[0].correct_answer+"</Button>";
    console.log(correctAnswer);
    let kaikkiVastaukset = "<p>Question: "+que[0].question+"</p>";
    for (let i = 0; i < arpa; i++) {
        kaikkiVastaukset = kaikkiVastaukset+"<Button>"+que[0].incorrect_answers[i]+"</Button>"
    }
    kaikkiVastaukset = kaikkiVastaukset+correctAnswer
    for (let i = arpa; i < que[0].incorrect_answers.length; i++) {
        kaikkiVastaukset = kaikkiVastaukset+"<Button>"+que[0].incorrect_answers[i]+"</Button>"
    }
    return kaikkiVastaukset  // Palauttaa vastaukset
}

function youAreRight(){
    return (
        document.getElementById("questionBlock").innerHTML = "<p>Correct! Play again, by choosing category!</p>"    
    )
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
    let kaikkiVastaukset = haeVastaukset()

    return (
        document.getElementById("questionBlock").innerHTML = "<p>Question:</p><p>"+que[0].question+"</p><br></br><p>Answer:</p><p>"+kaikkiVastaukset+"</p>"    
    )
}

async function questionHis(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=23&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = haeVastaukset()

    return (
        document.getElementById("questionBlock").innerHTML = "<p>Question:</p><p>"+que[0].question+"</p><br></br><p>Answer:</p><p>"+kaikkiVastaukset+"</p>"    
    )
}

async function questionSci(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=17&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = haeVastaukset()

    return (
        document.getElementById("questionBlock").innerHTML = "<p>Question:</p><p>"+que[0].question+"</p><br></br><p>Answer:</p><p>"+kaikkiVastaukset+"</p>"    
    )
}

async function questionEnt(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=12&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = haeVastaukset()

    return (
        document.getElementById("questionBlock").innerHTML = "<p>Question:</p><p>"+que[0].question+"</p><br></br><p>Answer:</p><p>"+kaikkiVastaukset+"</p>"    
    )
}

async function questionLit(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=10&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = haeVastaukset()

    return (
        document.getElementById("questionBlock").innerHTML = "<p>Question:</p><p>"+que[0].question+"</p><br></br><p>Answer:</p><p>"+kaikkiVastaukset+"</p>"    
    )
}

async function questionSpo(){
    let response = await fetch('https://opentdb.com/api.php?amount=1&category=21&token='+APIkey);
    let data = await response.json();
    que = await data.results;
    let kaikkiVastaukset = haeVastaukset();

    return (
        ReactDOM.render(

            < /haeVastaukset>
        )
        
    )
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
