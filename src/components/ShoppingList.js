//fichier : Composant pour notre magasin de plante

//déclaration d'une variable contenant notre liste de plantes
const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList(){
    //pour chaque entrée du tableau, on retourne un élément <li>
    return (<ul>
        {plantList.map((plant, index) => 
        (<li key={`${plant}-${index}`}>{plant}</li>))
        }
    </ul>

    )
}

export default ShoppingList