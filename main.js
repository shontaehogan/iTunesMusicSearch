// select and store items and elements working with
let main = document.querySelector('.resultlist')
let search = document.querySelector('.searchBar')
let url = "https://itunes.apple.com/search?term="

// "submit" event for getting search term
search.addEventListener('keyup', function(e) {

      // fetch request to be called after a submission
      let term = search.value
      fetch(url + term)
        .then(function(response) {
            if (response.status !== 200) {
              console.log(response.status)
              return
            }
            // append fetch results to the page
            response.json().then(function(data) {
                  let htmlstr = ``
                  data.results.forEach(function(data) {
                    htmlstr += `
      <div class ="searchresult">
        <a href = "${data.previewUrl}">
          <img class="image" src="${data.artworkUrl100}"><br>
        </a>
          <p class="title">${data.trackName}</p><br>
          <p class="name">${data.artistName}</p>
      </div> `

                  })

                  // click event that will play the song in the audio player
                  main.innerHTML = htmlstr
                  let albums = document.querySelectorAll(".searchresult a")

                  albums.forEach(function(listen) {
                    listen.addEventListener("click", function(event) {
                      event.preventDefault();
                      let url = listen.getAttribute("href");
                      document.querySelector("audio").setAttribute("src", url);
                    })
                  })
})
})
