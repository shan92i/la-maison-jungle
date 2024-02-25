import React from 'react';
import { useState } from 'react';

function Testt() {

    const currentState = useState('');
    const inpt = currentState[0];
    const setinpt = currentState[1];

    
    function handlesChoice(choosenFruit){

        switch(choosenFruit){
            case 'apple':
                setinpt('apple'); //c'est la valeur de 'inpt' qu'on met a jour! après le click
                break;

            case 'banana':
                setinpt('banana');
                break;
            
            case 'orange':
                setinpt('orange');
                break;
            
            default:
                setinpt('none');
                break;
        }
    }

    return (
        <div>
            <h1> Choose a fruit that you like : </h1>
            <button onClick={() => handlesChoice('apple')}>I want the apple !</button>
            {/* En enveloppant l'appel de la fonction dans une fonction fléchée () =>, vous créez une fonction anonyme qui 
            sera appelée uniquement lorsque l'événement onClick se produira. 
            Cela permet de différer l'exécution de handlesChoice('apple') jusqu'à ce que l'événement soit déclenché.  */}
            <button onClick={() => handlesChoice('banana')}>I want the banana !</button>
            <button onClick={() => handlesChoice('orange')}>I want the orange !</button>
        
            <p> Good choice ! You choose the {inpt}</p>
        </div>

        
    )




}

export default Testt;
