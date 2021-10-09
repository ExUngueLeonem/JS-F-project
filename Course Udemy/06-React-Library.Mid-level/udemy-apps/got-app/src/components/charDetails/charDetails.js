import React, {Component} from 'react';
import styled from 'styled-components';
import './charDetails.css'
import gotService from '../../services/gotService';

const CharDetailsDiv = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem;

    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;
 
const CharDetailsUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0;
    li {
        
    }
`;
class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.charId !== this.props.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) return
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })

        //this.foo.bar = 0
    }

    render() {

        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
                    <CharDetailsDiv>
                        <h4>{name}</h4>
                    <CharDetailsUl className="list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Born</span>
                            <span>{born}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Died</span>
                            <span>{died}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Culture</span>
                            <span>{culture}</span>
                        </li>
                    </CharDetailsUl>
                    </CharDetailsDiv>
        );
    }   
};

export default CharDetails;