angular.module('app').controller('MostrarController', function($scope, $routeParams, postsService) {
    // Define post;
    $scope.post = null;
    postsService.obtenerPorId($routeParams.id).then(function(data) {
        $scope.post = data;
    });

    // Declara métodos
    $scope.agregarLike = function() {
        postsService.agregarLike($routeParams.id).then(function(data) {
            $scope.post = data;
        });
    };

    // Funcionalidad para nuevo comentario
    $scope.nuevoComentario = {
        texto: null,
        autor: null
    };
    $scope.agregarComentario = function() {
        postsService.agregarComentario($routeParams.id, $scope.nuevoComentario).then(function(data) {
            $scope.post = data;
            $scope.nuevoComentario = {};
        });
    };
});
