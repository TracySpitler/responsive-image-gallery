/* JS Fetch
================================================== */

const client_id = 'client_id=f852db6eb81775d1c6d04696094453c7228fa15b76122906fdfaf31ad4397c62';
const API = 'https://api.unsplash.com/';
let randomPhoto = API + 'search/photos/?page=3&query=travel&' + client_id;

fetch(randomPhoto)
  .then(response => response.json())
  .then(data => {
    // Here's a list of unsplash photos!
    console.log(data)

    for (var i = 0; i < 9; i++) {

      // Fill Gallery
      var post = '<ul id="img-gallery">';

      for (var i = 0; i < 9; i++) {
        post += '<li>';
        post += '<div class="container">';
        post += '<span><img src="' + data.results[i].urls.regular + ' srcset="https://placehold.it/300.jpg?text=300px 300w, https://placehold.it/600.jpg?text=600px 600w, https://placehold.it/800.jpg?text=800px 800w" sizes="(max-width:300px) 100vw, (max-width: 600px) 33vw, 300px" alt=""' + data.results[i].description + '" class="image">';
        post += '<div class="overlay">';
        post += '<div class="text">';
        post += '<p><a href="' + data.results[i].user.portfolio_url + '"><img class="svg i-user" src="image-gallery-assets/user-icon.svg#user-icon"></a>' + data.results[i].user.name + '</p>';
        post += '<p><img class="svg i-heart" src="image-gallery-assets/heart.svg#heart">' + data.results[i].likes + '</p>';
        post += '</div>';
        post += '</div>';
        post += '</div>';
        post += '</li>';
      }

      post += '</ul>';
      gallery.querySelector('#img-gallery').innerHTML = post;
    }
  });

//https://api.unsplash.com/search/photos?page=1&query=travel&client_id=f852db6eb81775d1c6d04696094453c7228fa15b76122906fdfaf31ad4397c62
