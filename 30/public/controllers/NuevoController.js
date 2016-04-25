angular.module('app').controller('NuevoController', function($scope, postsService, $location) {
  // Declara modelo para nuevo post, con los valores por default
  $scope.nuevoPost = {
    imagen: 'http://placekitten.com/g/1000/304'
  }

  // Declara métodos
  $scope.agregarPost = function() {
      postsService.agregarPost($scope.nuevoPost).then(function(data) {
          $location.path('/');
      })
  }
});
