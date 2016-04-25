angular.module('app').controller('MostrarController', function($scope, $routeParams, postsService) {
    // Define post;
    $scope.post = null;
    postsService.obtenerPorId($routeParams.id).then(function(data) {
        $scope.post = data;
    })

    // Declara modelo para nuevo comentario
    $scope.nuevoComentario = {
        texto: null,
        autor: null
    }

    // Declara métodos
    $scope.agregarLike = function() {
        postsService.agregarLike($routeParams.id).then(function(data) {
            $scope.post = data;
        })
    }
    $scope.agregarComentario = function() {
        postsService.agregarComentario($routeParams.id, $scope.nuevoComentario).then(function(data) {
            $scope.post = data;

            $scope.nuevoComentario.texto = null;
            $scope.nuevoComentario.autor = null;
        })
    }
});
