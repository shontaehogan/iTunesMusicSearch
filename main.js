let main = document.querySelector(".resultlist")
let search = document.querySelector(".searchBar")
let url = "https://itunes.apple.com/search?term="
search.addEventListener('keyup', function(e) {

  let term = search.value;
  fetch(`https://itunes.apple.com/search?term=${search.value}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status)
          return;
        }

        response.json().then(function(data) {
          let htmlstr = ``
          data.results.forEach(function(data) {
            htmlstr += `
					<div class="searchresult">
							<a href="${data.previewUrl}">
							<img class="image" src="${data.artworkUrl100}"><br>
							</a>
					        <p class="title">${data.trackName}</p><br>
        					<p class="name">${data.artistName}</p>
     				 </div>
					`
          })
          main.innerHTML = htmlstr
          let albums = document.querySelectorAll('.searchresult a')

          albums.forEach(function(listen) {
            listen.addEventListener('click', function(event) {
              event.preventDefault();
              let url = listen.getAttribute("href");
              document.querySelector('audio').setAttribute('src', url);
            })
          })
        })
      }
    )
})
