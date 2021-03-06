(function ($) {
// ALL YOUR CODE GOES AFTER THIS LINE!  Don't delete the very final line, though!


  // First step - listen for when the Search Button (indicated by the class 'search-button') is clicked
  $('.search-button').click(function(){

    // remove any already-existing results from results-area
    $('.results-area h2').remove();
    $('.results-area img').remove();
    $('.results-area p').remove();
    $('.results-area a').remove();
    $('.results-area br').remove();
    $('.results-area div').remove();

    // if the search button was clicked, store the text from the search box
    // in a variable.
    var searchtext = '';
    searchtext = $('.search-box').val();

    // now, run the function runSearch using the value from the search box
    runSearch(searchtext);

  });

// don't get rid of this line!
}(jQuery));




// Our search function
function runSearch(userText){
  var encodedText;
  encodedText = encodeURIComponent(userText);


  $.getJSON("http://www.omdbapi.com/?s=" + encodedText + "&r=json", function (data) {
    $.each(data.Search, function(counter, movie) {
      console.log(movie);
      //document.write(movie.Title);
      $('.results-area').append('<div class="movie-result">');
      $('.results-area').append('<h2>' + movie.Title + '</h2>');
      $('.results-area').append('<p>' + movie.Year + '</p>');
      $('.results-area').append('<p> <a class="IMDbLink" href="http://www.imdb.com/title/' + movie.imdbID + '/">View IMDb Page</a></p>');
      $('.results-area').append('<br>');
      $('.results-area').append('<img src="' + movie.Poster + '" alt="poster">');
      $('.results-area').append('</div>');

    });
  });
}
