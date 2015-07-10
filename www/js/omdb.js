angular.module('ionicMovies.omdb', [])

.controller('OmdbCtrl', function($scope, $http) {

    $scope.getMovie = function() {
        // $scope.rndNum();
        var id = Math.floor((Math.random() * 9999999) + 1);
        $http.get("http://omdbapi.com/?i=tt" + id)  //
        .success(function (response) {
          $scope.name = response.Title;
          $scope.rating = response.imdbRating;
          $scope.year = response.Year;
          $scope.plot = response.Plot;
        console.log($scope.name);
        console.log(id);
    });
  }
});
