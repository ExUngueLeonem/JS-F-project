import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            showRandomChar: true
        }
        
        this.onToggleHideRandomChar = this.onToggleHideRandomChar.bind(this);
        this.randomCharRender = this.randomCharRender.bind(this);

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
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.randomCharRender()}
                        </Col>

                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;