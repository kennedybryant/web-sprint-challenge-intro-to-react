// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
background-color: white;
opacity: .7;
width: 50%;
display: flex;
justify-content: center;
margin: 10px auto;
padding-top: 20px;
padding-bottom: 20px;


    h3 {
        font-size: 1.5em;
    }
`


export default function Character (props) {
    const { info } = props

    return (
        <StyledCharacter className='card-container'>
            <div className='card'>
                <div>
                    <h3>{info.name}</h3>
                </div>
          
                <div className='card'>
                    <p>Birthyear: {info.birth_year}</p>
                    <p>Gender: {info.gender}</p>
                    <p>Mass: {info.mass}</p>
                    <p>Height: {info.height}</p>
                    <p>Hair Color: {info.hair_color}</p>
                    <p>Skin Color: {info.skin_color}</p>
                    <p>Eye Color: {info.eye_color}</p>
                </div>
            </div>
        </StyledCharacter>
    )
}