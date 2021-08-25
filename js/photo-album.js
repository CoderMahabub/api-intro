function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

loadPhotos();

function displayPhotos(photos) {
    const photoContainer = document.getElementById('photo-album');
    for (const photo of photos) {
        const div = document.createElement('div');
        div.classList.add('photo-album');
        div.innerHTML = `
        <h3>${photo.title}</h3>
        <img src="${photo.thumbnailUrl}" alt="Thumbnail">
        `;
        photoContainer.appendChild(div);
    }
}