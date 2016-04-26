angular.module('app').controller('MostrarController', function($scope, $routeParams, postsService) {
    // Define post;
    $scope.post = null;
    postsService.obtenerPorId($routeParams.id).then(function(data) {
        $scope.post = data;
    });

    // Declara métodos
    $scope.agregarLike = function() {
        // IMPLEMENTAR EL LLAMADO al método adecuado "postsService" y luego actualizar $scope.post
    };
});
