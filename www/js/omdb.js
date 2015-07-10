angular.module('ionicMovies.omdb', [])

.controller('OmdbCtrl', function($scope, $http) {
  // $scope.search = ''
         //gets movie by random IMDB I.d.
      $scope.getMovie = function() {
           var maximum = 0000000;
           var minimum = 9999999;
           var id = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
          $http.get("http://omdbapi.com/?i=tt" + + id)  //
           .success(function (response) {
             if(response.Type === "movie"){
                $scope.name = response.Title;
                $scope.rating = response.imdbRating;
                $scope.year = response.Year;
                $scope.plot = response.Plot;
              console.log(id);
              console.log(response)
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




