

<<<<<<< HEAD

=======
>>>>>>> c47a1cc9bab74a3b6457be95789d5da4f364e1b1
// 1. select and store the elements
let main = document.querySelector(".resultlist")
let search = document.querySelector(".searchBar")
let url = "https://itunes.apple.com/search?term="
// 2. Create `submit` event for getting the search term
search.addEventListener('keyup', function(e){
<<<<<<< HEAD
// 3. Create `fetch` request called after a submission
=======
// 3. Create `fetch` request that is called after a submission
>>>>>>> c47a1cc9bab74a3b6457be95789d5da4f364e1b1
	let term = search.value
	fetch(url+term)
		.then(
	      function(response) {
	        if (response.status !== 200) {
	          console.log(response.status)
	          return
	        }
<<<<<<< HEAD
// 4. append and fetch results to your page
=======
// 4. Create append fetch results
>>>>>>> c47a1cc9bab74a3b6457be95789d5da4f364e1b1
			response.json().then(function(data) {
				let htmlstr = ``
				data.results.forEach(function(data){
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
<<<<<<< HEAD
// 5. Create a listen for a click that will play the song in the audio play
=======
// 5. listen for a click that will play the song in the audio play
>>>>>>> c47a1cc9bab74a3b6457be95789d5da4f364e1b1
				main.innerHTML = htmlstr
					let albums = document.querySelectorAll('.searchresult a')

					albums.forEach(function(listen){
						listen.addEventListener('click', function(event){
							event.preventDefault();
							let url = listen.getAttribute("href");
							document.querySelector('audio').setAttribute('src',url);
						})
					})
			})
			}
		)
})
