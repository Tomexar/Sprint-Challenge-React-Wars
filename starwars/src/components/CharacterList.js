import React from 'react';
import Character from './Character';

function CharacterList(props) {

    return (
        <div>
            {props.starwarsChars.map(characterFromMap => {
                return <Character characterProp= {characterFromMap} />
            })}
            {props.starwarsHome.map(planetFromMap =>{
                return <Character homeProp = {planetFromMap} />
            })}
        </div>
    )
}

export default CharacterList;