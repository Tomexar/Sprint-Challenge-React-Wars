import React from 'react';

const Character = props => { 
    return(
        <div className = 'Characters-card'>
            {/* <img src = {props.characterProp.img} alt = {props.characterProp.name} /> */}
            <div className = 'character-info'>
                <h3>{props.characterProp.name}</h3>
                <p>
                    <strong>Height:</strong>
                    {props.characterProp.height}
                </p>
                <p>
                    <strong>Mass:</strong>
                    {props.characterProp.mass}
                </p>
                <p>
                    <strong>Hair Color:</strong>
                    {props.characterProp.hair_color}
                </p>
                <p>
                    <strong>Skin Color:</strong>
                    {props.characterProp.skin_color}
                </p>
                <p>
                    <strong>Eye Color</strong>
                    {props.characterProp.eye_color}
                </p>
                <p>
                    <strong>Birth Year:</strong>
                    {props.characterProp.birth_year}
                </p>
                <p>
                    <strong>Gender:</strong>
                    {props.characterProp.gender}
                </p>
                <p>
                    <strong>Homeworld:</strong>
                    {props.characterProp.homeworld}
                </p>
                <p>
                    <strong>Vehicles:</strong>
                    {props.characterProp.vehicles.forEach((ship)=>
                        (ship))}
                </p>

            </div>      
        </div>
    );    
};


export default Character;