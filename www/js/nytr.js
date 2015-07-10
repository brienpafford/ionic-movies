angular.module('ionicMovies.nytr', [])

.controller('NytrCtrl', function($scope, $http) {

	var API_KEY = '3bc8debeaee58804b78f2a23ca726921%3A0%3A72480690';

	$scope.search = '';

	$scope.add = function(search){
		$http.get("http://crossorigin.me/http://api.nytimes.com/svc/movies/v2/reviews/search.json?query" + search + "&critics-pick=N&api-key=" + API_KEY)
		.success(function (response) {
			console.log("response");
			})
		}
});
