import React from 'react';
import Game1Functions from './Game1Functions';
import './App.css';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import haeVastaukset from '../Game1Functions'


const questionRender = () => {
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

export default withRouter(questionRender)