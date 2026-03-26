/* --- LE MÉCANISME DE NANOUCHKA NANOUCHKA --- */

// 1. GESTION DES FILTRES (Homme, Femme, etc.)
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.product-card');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Change la couleur du bouton actif
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 2. GESTION DU PANIER (Ouvrir / Fermer)
const cart = document.getElementById('side-cart');
const overlay = document.getElementById('cart-overlay');
const closeBtn = document.getElementById('close-cart');
const addBtns = document.querySelectorAll('.add-to-cart');

addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cart.classList.add('open');
        overlay.classList.add('active');
    });
});

[closeBtn, overlay].forEach(el => {
    if(el) {
        el.addEventListener('click', () => {
            cart.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
});

// 3. CALCUL DU PRIX (Colissimo / Mondial Relay)
const shippingInputs = document.querySelectorAll('input[name="shipping"]');
const totalDisplay = document.getElementById('cart-total');

function updatePrice() {
    let shippingPrice = 0;
    shippingInputs.forEach(input => {
        if(input.checked) shippingPrice = parseFloat(input.value);
    });
    // Pour l'instant on affiche juste les frais de port pour tester
    totalDisplay.innerText = shippingPrice.toFixed(2) + " €";
}

shippingInputs.forEach(input => {
    input.addEventListener('change', updatePrice);
});