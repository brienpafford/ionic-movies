angular.module('ionicMovies.omdb', [])

.controller('OmdbCtrl', function($scope, $http) {
  // $scope.search = ''
    $scope.request = 0
    $scope.requestCache = 0;
         //gets movie by random IMDB I.d. that is rated higher than 7.0
      $scope.getMovie = function() {
          $scope.posterAlt = "";
          $scope.poster = "";
          $scope.name = "";
          $scope.cat = "";
          $scope.actors = "";
          $scope.rating = "";
          $scope.year = "";
          $scope.plot = "";
          $scope.votes = "";
          //fix for numbers:  Treat them as strings.  Concat them.  Check str.length and when === 7 run the function.  Put your math function in a foor loop
          var id = "";
          for(i=0; i<7; i++){
            var idDigit = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            var idString = idDigit.toString();
            var id = id + idString;
          }
          $http.get("http://omdbapi.com/?i=tt" + id)  //
           .success(function (response) {
             if(response.Type === "movie" && response.imdbRating * 1 > 5.5 || response.Type === "series" && response.imdbRating * 1 > 5.5){
                $scope.name = response.Title;
                $scope.cat = response.Type;
                $scope.actors = response.Actors;
                $scope.rating = response.imdbRating;
                $scope.year = response.Year;
                $scope.plot = response.Plot;
                $scope.votes = response.imdbVotes;
                $scope.requestCache = $scope.request;
                $scope.request = 0;
                if(response.Poster === "N/A"){
                  $scope.posterAlt = "Sorry.  No poster was available."
                }else{
                  $scope.poster = response.Poster;
                }
                console.log(id);
                console.log(response);
                console.log($scope.poster);
              }else{
                $scope.request = $scope.request += 1;
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




