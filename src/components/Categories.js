import '../styles/Categories.css'
import { plantList } from '../datas/plantList';


function Categories({selectedCategory, setSelectedCategory}){

    const CategoriesSet = new Set(plantList.map((plant) => plant.category) ); //on crée un ensemble de catégories uniques


    function handlesChangeOnCat(event){

        const val = event.target.value;
        setSelectedCategory(val);
       
    }

    function handlesReset(event){

        setSelectedCategory('');
    }

    return (

        <div className='lmj-categories'>


            <label 
                htmlFor="cat">
                Filtrer par catégorie
            </label>

            <select className='lmj-categories-select' id="cat" onChange={handlesChangeOnCat} defaultValue=''>

            {/* syntaxe utilisée pour créer une copie d'un ensemble (Set) en tant que tableau */}
                {[...CategoriesSet].map((category) => (
                    <option className='lmj-categories-options' value={category}>{category}</option>
                
                
                ))}
                    <option value=''>Toutes les catégories</option>
                   
                

    
        </select>
                <button onClick={handlesReset}>Réinitialiser</button>

        </div>
    
    
    
    
    )
   


}




export default Categories;