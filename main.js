

// 1. select and store the elements
let main = document.querySelector(".resultlist")
let search = document.querySelector(".searchBar")
let url = "https://itunes.apple.com/search?term="
// 2. Create your `submit` event for getting the user's search term
search.addEventListener('keyup', function(e){
// 3. Create `fetch` request that is called after a submission
	let term = search.value
	fetch(url+term)
		.then(
	      function(response) {
	        if (response.status !== 200) {
	          console.log(response.status)
	          return
	        }
// 4. Create append fetch results
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
// 5. listen for a click that will play the song in the audio play
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
