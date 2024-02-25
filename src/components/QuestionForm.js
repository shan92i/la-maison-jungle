import { useState } from "react";




function QuestionForm(){

    const [inputValue, setInputValue] = useState('Posez votre question ici');
    const isInputError = inputValue.includes('f') || inputValue.includes('?');
    
    function checkValue(value){
        if(!value.includes('f')){
            setInputValue(value);
        }
    }
    
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)} //on accède à la valeur tapée avec setInputValue(e.target.value
            />
           <button onClick={() => alert(inputValue)}>Alertez moi ! </button> 
           {/* //onClick est un événement JavaScript qui se déclenche 
           //lorsque l'utilisateur clique sur un élément, en l'occurrence un bouton dans ce cas. */}

        </div>
    )
    




}



export default QuestionForm;



//formulaire non controlé : 
// function QuestionForm(){

//     function handleSubmit(e){
//         e.preventDefault();
//         alert(e.target['my_input'].value); //cette expression permet de récupérer la valeur saisie dans le champ de texte du formulaire lorsque celui-ci est soumis.
//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='text' name='my_input' defaultValue='Tapez quelque chose'/>
//             <button type='submit'>Entrer</button>
//         </form>
//     )
    




// }