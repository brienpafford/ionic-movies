angular.module('ionicMovies.rotten', [])

.controller('RottenCtrl', function($scope, $http) {

  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // $scope.API = 'https://api.themoviedb.org/3/discover/movie';
  $scope.moviesArr = [];

  $scope.getMovie = function() {
    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=eccd2504f86260d8315b3dbf909e2c1e&with_genre=28&sort_by=vote_average.desc&vote_count.gte=100')
      .success(function(data) {
        $scope.movies = data;
        $.each(data.results, function(index, movie) {
          $scope.moviesArr.push({
            title: movie.title,
            release_date: movie.release_date,
            votes: movie.vote_count,
            rating: movie.vote_average,
            description: movie.overview,
            popularity: movie.popularity,
            poster: 'http://image.tmdb.org/t/p/w500' + movie.poster_path
          });
        });
        $scope.chosenMovieIndex = getRand(0, 20);
        $scope.movie = $scope.moviesArr[$scope.chosenMovieIndex];
      });
  }

})
