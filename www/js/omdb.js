angular.module('ionicMovies.omdb', [])

.controller('OmdbCtrl', function($scope, $http) {
  // $scope.search = ''
         //gets movie by random IMDB I.d. that is rated higher than 7.0
      $scope.getMovie = function() {
           var maximum = 0000001;
           var minimum = 4000000;
           var id = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
          $http.get("http://omdbapi.com/?i=tt" + id)  //
           .success(function (response) {
             if(response.Type === "movie" && response.imdbRating * 1 > 6  && response.Poster !== "N/A"){
                $scope.name = response.Title;
                $scope.actors = response.Actors;
                $scope.rating = response.imdbRating;
                $scope.year = response.Year;
                $scope.awards = response.Awards;
                $scope.plot = response.Plot;
                $scope.votes = response.imdbVotes;
                $scope.poster = response.Poster;

              console.log(id);
              console.log(response);
              console.log($scope.poster);
            }else{
              $scope.getMovie();
            }
       });
     }

});

//trying to get this to search by year of release.  CAnt figure out if my input in the search field is getting into the api request
//    $scope.getMovie = function() {
//        // var maximum = 2015;
//        // var minimum = 1900;
//        // var id = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//        $http.get("http://omdbapi.com/?i=tt" + search)  // + id
//         .success(function (response) {
//           if(response.Type === "movie" && response.Year === $scope.search){
//              $scope.name = response.Title;
//              $scope.rating = response.imdbRating;
//              $scope.year = response.Year;
//              $scope.plot = response.Plot;
//            console.log(id);
//            console.log(response)
//          }else{
//            $scope.getMovie();
//          }
//     });
//   }




