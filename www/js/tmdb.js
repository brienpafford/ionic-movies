angular.module('ionicMovies.tmdb', [])

.controller('TmdbCtrl', function($scope, $http) {

  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // $scope.API = 'https://api.themoviedb.org/3/discover/movie';
  $scope.data = {};
  $scope.data.minRating = 6;
  $scope.data.minVotes = 100;
  $scope.data.hasSearched = false;


// https://api.themoviedb.org/3/discover/movie?api_key=eccd2504f86260d8315b3dbf909e2c1e&with_genre=28&sort_by=vote_average.desc&vote_count.gte=100'
  $scope.data.getMovie = function() {
    $scope.data.query = 'https://api.themoviedb.org/3/discover/movie?api_key=eccd2504f86260d8315b3dbf909e2c1e&sort_by=vote_average.desc'
    if ($scope.data.genre) {
      $scope.data.query += '&with_genre=' + $scope.data.genre
    }
    if ($scope.data.year) {
      $scope.data.query += '&primary_release_year=' + $scope.data.year
    }
    if ($scope.data.minRating) {
      $scope.data.query += '&vote_average.gte=' + $scope.data.minRating
    }
    if ($scope.data.minVotes) {
      $scope.data.query += '&vote_count.gte=' + $scope.data.minVotes
    }
    $scope.data.query += '&page=' + getRand(1, 10);

    $http.get($scope.data.query)
      .success(function(data) {
        $scope.data.moviesArr = [];
        $scope.data.movies = data;

        $.each(data.results, function(index, movie) {
          $scope.data.moviesArr.push({
            title: movie.title,
            release_date: movie.release_date.slice(0,4),
            votes: movie.vote_count,
            rating: movie.vote_average,
            description: movie.overview,
            popularity: movie.popularity,
            poster: 'http://image.tmdb.org/t/p/w500' + movie.poster_path
          });
        });
        $scope.data.chosenMovieIndex = getRand(0, 20);
        $scope.data.movie = $scope.data.moviesArr[$scope.data.chosenMovieIndex];
        $scope.data.hasSearched = true;
      });
  }

})
