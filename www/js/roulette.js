angular.module('ionicMovies.roulette', [])

    .controller('RouletteCtrl', function($scope, $http) {

        var API_URL = ("http://netflixroulette.net/api/api.php?");

         $scope.getMovie = function () {

        $http.get('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
            .success(function(data, status, headers, config) {
                $scope.title = data.show_title;
                $scope.year = data.release_year;
                $scope.rating = data.rating;
                $scope.category = data.category;
                $scope.summary = data.summary;
                $scope.poster = data.poster;
            })
            .error(function(data, status, headers, config) {

            });

     }
});
