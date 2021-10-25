import React from 'react';
import Game1Functions from './Game1Functions';
import './App.css';
import './styles.css';
import { withRouter } from 'react-router';
import { Container, Row } from 'react-bootstrap';



const Game1 = () => {
    return (
        <div className="game1-container">
            <Container>
                <Row>
                    <div className="col text-center">
                        <Game1Functions />          
                    </div>     
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(Game1)
