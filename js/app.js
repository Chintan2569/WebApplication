var app = angular.module('webApplication', []);
app.controller('webController', function($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
      $scope.data = response.data;      
      console.log(response.data)
	  // console.log(response.data.elements[0].elements[0])
	  // console.log(response.data.elements[2].elements)
  });
});

