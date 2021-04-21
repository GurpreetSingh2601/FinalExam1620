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

    return "Album name not defined.";
}
