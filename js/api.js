function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

// Show in UI
function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email ${user.email}`;
        ul.appendChild(li);
    }
}

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(res => console.log(res))
}

//Load Photos from JSON
function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhotos(data))
}

//Display Photo From JSON
function displayPhotos(data) {
    const loadPhoto = document.getElementById('load-photos');
    for (const photo of data) {
        // console.log(photo);
        const article = document.createElement('article');
        article.innerText = `Album ID: ${photo.id} | URL: ${photo.url} | Thumbnail: ${photo.thumbnail} | Album Title: ${photo.title} `;
        loadPhoto.appendChild(article);
    }
}

//Load Posts from
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayPosts(data) {
    const ul = document.getElementById('users-post');
    for (const post of data) {
        const li = document.createElement('li');
        li.innerText = `User ID: ${post.userId}, ID: ${post.id}, Title: ${post.title}, Message: ${post.body}`;
        ul.appendChild(li);
    }
}