import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.png';
import Testt from './Test'
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../styles/Layout.css'
import Categories from './Categories';


function App() {
	
	//cette ligne de code initialise un état local nommé cart avec un tableau vide comme valeur initiale,
	// et fournit également une fonction updateCart pour mettre à jour cette valeur d'état.
	
	const [selectedCategory, setSelectedCategory] = useState('');
	//on définit un état correspondant à la catégorie de plantes actuellement choisie par l'utilisateur

	//récupérer le panier au premier chargement de la page 
	const savedCart = localStorage.getItem('cart');
	// localStorage.getItem(key) 
	// permet de récupérer la valeur stockée dans le localStorage en utilisant la clé.
	// Si la clé n'existe pas, getItem renverra null

	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    //prend une chaîne JSON et la convertit en objet JavaScript
   

	
	//permet de sauvegarder le panier à chaque modification
    useEffect(() => {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart', cartJSON);
        //setItem affecte la valeur spécifiée au localStorage, associée à la clé spécifiée.
        // Si la clé existe déjà, la valeur est mise à jour ; sinon, une nouvelle paire clé-valeur est ajoutée au localStorage.
        // localStorage.setItem(key, value) 
    },[cart]);
	//garantit que la sauvegarde se fait uniquement si cart change de valeur

    
    
        
	
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo'/>
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			
			<Categories 
					selectedCategory={selectedCategory} 
					setSelectedCategory={setSelectedCategory} 
			/>
			<div className='lmj-layout-inner'>
				<Cart 
					cart={cart} 
					updateCart={updateCart}
				/>
				<ShoppingList
					cart={cart}
					updateCart={updateCart}
					selectedCategory={selectedCategory}
				/>
				{/* Vous transmettez les valeurs de l'état cart et la fonction 
				updateCart comme props aux composants Cart et ShoppingList.

				Cela signifie que les composants Cart et ShoppingList pourront accéder à la valeur actuelle 
				de l'état cart et à la fonction updateCart pour mettre à jour cet état. */}
			</div>
			
			
			<Footer />
		</div>
	)
}

export default App


// useEffect(() =>{
// 	alert(`Bienvenue dans la maison jungle !`);
// }, []);
// //le tableau de dépendances vide indique que l'effet ne s'executera qu'au premier render du composant
