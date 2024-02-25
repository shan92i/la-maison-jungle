import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList({ cart, updateCart, selectedCategory }) {
    const categories = [];

    plantList.forEach((plant) => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });

    function addToCart(plantName, plantPrice) {
        const currentPlantAdded = cart.find((plant) => plant.name === plantName);
        if (currentPlantAdded) {
            	const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== plantName
            );
        updateCart(
				[...cartFilteredCurrentPlant,{ name: plantName, price: plantPrice, amount: currentPlantAdded.amount + 1 }
        ]);
        } else {
            updateCart([...cart, { name: plantName, price: plantPrice, amount: 1 }]);
        }
    }

    // Déclaration de filteredList comme variable globale
    let filteredList = plantList;
    if (selectedCategory !== '') {
        filteredList = plantList.filter((plant) => plant.category === selectedCategory);
    }

    return (
        <div className='lmj-shopping-list'>
            <ul className="lmj-plant-list">
                {filteredList.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        {/* Passer name et price comme arguments dans la fonction addToCart */}
                        <button className='lmj-button-add' onClick={() => addToCart(name, price)}>
                            Ajouter
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
