import React, {Component} from 'react';
import styled from 'styled-components';
 
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
    render() {
        return (
                    <CharDetailsDiv>
                        <h4>John Snow</h4>
                    <CharDetailsUl className="list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Born</span>
                            <span>1783</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Died</span>
                            <span>1820</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="term">Culture</span>
                            <span>First</span>
                        </li>
                    </CharDetailsUl>
                    </CharDetailsDiv>
        );
    }   
};

export default CharDetails;