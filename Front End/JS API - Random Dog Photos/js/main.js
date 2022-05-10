//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const dogPhoto = document.querySelector('.dog-photo');
        dogPhoto.src = data.message;
    }
    )
    .catch(error => console.log(error));
