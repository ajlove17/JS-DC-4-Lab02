
// Setup Listeners for form
var searchForm = document.querySelector('#js-submitNewArtist')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()


  // Get the values enetered by the user
    var query = document.querySelector('input[name="q"]').value


    /*//open(method, url, async)
    var xhr = new XMLHttpRequest();

    xhr.onreadyseatechange = handleRequest;
    xhr.open('GET', 'https://api.spotify.com/v1/search?q=' + query + '&type=artist" -H "Accept: application/json" -H "Authorization: Bearer BQAnbAhKhr991btN5pMuzvj9dJemfhC9WIorZBTTwqyPXLPxxwnyXIxESd-2T1igrIt59bVlq2gPB0QncMi2yeS2-Vs9VBwvu8ZuyNbTaWtOyQgNLXcA2Lce8vzCzHyF6FT9gzQ8-ItQWUgu5p4L"');

    xhr.send(null)*/

renderSearch();

})

function renderSearch() {
  var searchHtml = template(searchResponse)
   app.innerHTML = searchHtml
 }
