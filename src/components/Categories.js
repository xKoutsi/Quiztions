import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles.css';
import '../index.css';
// import { Container, Row } from 'react-bootstrap';
import questionGeo from '../Game1Functions'
import questionHis from '../Game1Functions'
import questionSci from '../Game1Functions'
import questionEnt from '../Game1Functions'
import questionLit from '../Game1Functions'
import questionSpo from '../Game1Functions'


const Categories = () => {
    return (

        <div>
            <Button variant="geo" onClick={questionGeo}>Geography</Button>

            <Button variant="his" onClick={questionHis}>History</Button>

            <Button variant="sci" onClick={questionSci}>Science</Button>

            <Button variant="ent" onClick={questionEnt}>Entertainment</Button>

            <Button variant="lit" onClick={questionLit}>Art & Literature</Button>

            <Button variant="spo" onClick={questionSpo}>Sports & Leisure</Button>                
        </div>   


    )
}

export default Categories