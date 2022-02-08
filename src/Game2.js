import React from 'react';
// import Game1Functions from './Game1Functions';
import './App.css';
import './styles.css';
import { Container, Row } from 'react-bootstrap';
import Categories from './components/Categories';
import Question from './components/Question';
import { withRouter } from 'react-router';


const Game2 = () => {
    return (
        
            <Container id="game2-container">
                <Row>
                    <div className="col text-center">
                        <Categories />
                    </div>
                </Row>
                <Row id="questionRow">
                    <div>
                        <Question />
                    </div>
                </Row>
            </Container>
        
    )
}



export default withRouter(Game2)