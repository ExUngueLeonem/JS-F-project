import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import CharacterPage from '../characterPage';
import BookPage from '../bookPage'
import HousePage from '../housePage';



class App extends Component {
    gotService = new gotService();

    constructor(props){
        super(props);

        this.state = {
            showRandomChar: true,
            error: false
        }
        
        this.onToggleHideRandomChar = this.onToggleHideRandomChar.bind(this);
        this.randomCharRender = this.randomCharRender.bind(this);

    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onToggleHideRandomChar(stateValue) {
        this.setState({showRandomChar: !stateValue});
    }


    randomCharRender() {
        let res =   <div className='random-block rounded'>
                    <Button color="info" 
                            onClick={() => this.onToggleHideRandomChar(this.state.showRandomChar)}>
                            Toggle random character field
                    </Button>{' '}
                    </div>


        if (this.state.showRandomChar) {
            return (
                <>
                    <RandomChar/> 
                    {res}
                </>
            );
        } else return res;
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {this.randomCharRender()}
                            </Col>
                        </Row>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' component={BookPage}/>
                        <Route path='/houses' component={HousePage}/>
                    </Container>
                </div>
            </Router>
        );
    }
};

export default App;