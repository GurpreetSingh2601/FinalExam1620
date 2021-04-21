const ALBUMS = [
    { name: "Album 1", price: 12.99, inCart: false },
    { name: "Album 2", price: 14.99, inCart: false },
    { name: "Album 3", price: 9.99, inCart: false },
    { name: "Album 4", price: 19.99, inCart: false }
];
function getAlbumName(name) {
    for (const album of ALBUMS) {
        if (album.name == name) {
            return album;
        }
    }

    return undefined;
}
let SHOP_ITEMS = null;
let SHOP_ITEM_IMAGES = null;
let CART = null;

function OnAlbumClick(item) {
    clicked_album_name = item.childNodes[1].textContent;
    album = getAlbumName(clicked_album_name);

    if (album == undefined) {
        return;
    }

    if (album.inCart) {
        alert('That album is already in your cart!')
        return;
    }

    album.inCart = true;

    reloadCart();
}

function reloadCart() {

    CART.innerHTML = '';

    for (const album of ALBUMS) {
        if (!album.inCart) {
            continue;
        }

        const photo_name = (album.name).replace(' ', '');

        let html = `
            <div class="cart-row">
                <span class="cart-image"><img src="Images/${photo_name}.png"></img></span>
                <span class="cart-name">${album.name}</span>
                <span class="cart-price">$${album.price}</span>
            </div>
        `;

        CART.innerHTML += html;
    }
}

window.onload = () => {

    SHOP_ITEMS = document.querySelectorAll('.shop-item');
    SHOP_ITEMS.forEach(item => {
        item.addEventListener('click', () => OnAlbumClick(item));
    });

    SHOP_ITEM_IMAGES = document.querySelectorAll('.shop-item-image');
    SHOP_ITEM_IMAGES.forEach(item => {
        photo_name = (item.id).replace(' ', '');
        item.src = `Images/${photo_name}.png`;
    });

    CART = document.getElementById('cart-items');

    reloadCart();
}