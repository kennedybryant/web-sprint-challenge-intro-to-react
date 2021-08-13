// Write your Character component here
import React from 'react';

export default function Character({ data, action }) {

    // return data.map((props) => 
    //     <div className='container'>
    //         <h3>Name: {props.name}</h3>
    //         <p>Birthyear: {props.birth_year}</p>
    //         <p>Gender: {props.gender}</p>
    //         <p>Mass: {props.mass}</p>
    //         <p>Height: {props.height}</p>
    //         <p>Hair Color: {props.hair_color}</p>
    //         <p>Skin Color: {props.skin_color}</p>
    //         <p>Eye Color: {props.eye_color}</p>
    //     </div>
    // )

    return (
        <div className='character'>
            {data.name}
            <button onClick={() => action(data.name)}>
                Character Information
            </button>
        </div>
    )

}