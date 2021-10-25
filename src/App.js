import logo from './quiztions_logo.png';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Component } from 'react';


 
class App extends Component {            // Logo ja sen alla main menu
  render() {
    return (   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            
            <Container fluid="md">
                <Row>
                    <div className="col text-center">
                      <a href="/game1" className="btn btn-primary">Traditional Quiz</a>                  
                    </div>
                </Row>
                <br />
                <Row>
                    <div className="col text-center">
                      <a href="/game2" className="btn btn-primary">German Quiz</a>                   
                    </div>
                </Row>
                <br />
                <Row>
                    <div className="col text-center">
                      <a href="/options" className="btn btn-info">Options</a>                   
                    </div>
                </Row>
            </Container>
            
        </header>

      </div>
    );
  }
}

export default App;
