import { useState } from 'react';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? <img src={Sun} alt="sun-icon" /> : <img src={Water} alt="water-icon" />;

  

    function handleClick(value){
        let message = '';

            switch(scaleValue){
                case 1 : 
                    message= 'peu';
                    break;
                case 2 :
                    message= 'modérement';
                    break;
                case 3 :
                    message= 'beaucoup';
                    break;
                default:
                    message= '';
                    break;
            }
            
            careType === 'light' ? (message += ' de lumière') : (message += ' d\'arrosage');
            alert('Cette plante requiert ' + message);

        }
       

        
    
    return (
        <div onClick={handleClick}>
            
            
            {range.map((rangeElem) => (
                scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>
                
            ))}
            

            

        </div>

        
    );
}

export default CareScale;