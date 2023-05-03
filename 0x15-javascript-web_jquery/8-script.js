$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
  data.results.forEach(function (val) {
    $('UL#list_movies').append('<li>' + val.title + '</li>');
  });
});
