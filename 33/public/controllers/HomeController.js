angular.module('app').controller('HomeController', function($scope, $location, postsService) {
    // Obtiene todos los posts
    $scope.posts = null;
    postsService.obtenerTodos().then(function(data) {
        $scope.posts = data;
    });

    // Define métodos
    $scope.mostrarPost = function(_id) {
        // Cambia la vista usando el servicio $location
        $location.path('/mostrar/' + _id);
    };
});
