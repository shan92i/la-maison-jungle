import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({ cart = [], updateCart }) {

    const [isOpen, setIsOpen] = useState(true);
    let total = 0;

    // Vérifier si cart est défini et itérable
    if (cart && cart.length > 0) {
        for (const plantType of cart) {
            total += plantType.amount * plantType.price;
        }
    }
    useEffect(() => {
        document.title = `LMJ : ${total}€ achats`
    },[total])
    // en mettant un deuxième paramètre, je fais en sorte d'afficher l'alerte uniquement si le total du panier change

    

  
    return isOpen ? (
        <div className="lmj-cart">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>

            <h2>Panier</h2>
            {Array.isArray(cart) && cart.length > 0 ? (
                cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                    </div>
                ))
            ) : (
                <div>Votre panier est vide</div>
            )}

            <h3>Total : {total}€</h3>
            <button className='lmj-button-reset' onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le panier
            </button>
        </div>
    );
}

export default Cart;
