import React from 'react';
import Ingredients from './Ingredients';

function Cook ({aliment}) {
    return (
    aliment && (
        <div>
            <div>Title: {aliment.title}</div>
            <img src={aliment.image} alt={aliment.title} />
            {aliment.missedIngredients.map((element, index) => (
            <Ingredients
            key={index} 
            name={element.name} /> 
            ))}
        </div>
    ))
}

export default Cook

