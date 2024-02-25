import { useState } from "react";
import '../styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('');

    function handlesBlur(event){

      
        const myValue = event.target.value;
        if(!myValue.includes('@')){
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide');
        }
       
    }

    function handlesChange(event){
        setInputValue(event.target.value); //utilisée pour mettre à jour la valeur de l'état associée à inputValue
    }

    function handlesSubmit(event){
        event.preventDefault();
        console.log("La valeur de l'email est " + inputValue);
    }
    return (

        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                    Pour les passionné-e-s de plantes 🌿🌱🌵
            </div>
            <form onSubmit={handlesSubmit}>
            <div className="lmj-footer-elem">Laissez nous votre email : 

            <input 
            type='email'
            name='email-input'
            value={inputValue}
            onBlur={handlesBlur} 
            onChange={handlesChange}/>

            <button 
            type="submit">Submit
            </button>
            </div>
            </form>
           


        </footer>


    )
}

export default Footer;