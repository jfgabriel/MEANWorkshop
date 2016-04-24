angular.module('app').controller('MostrarController', function($scope, $routeParams, postsService) {
    // Define post;
    $scope.post = null;
    // IMPLEMENTAR: Obtener el post en el ID referenciado en $routeParams.id llamando a un método de postsService

    // Funcionalidad para agregar likes
    $scope.agregarLike = function() {
        postsService.agregarLike($routeParams.id).then(function(data) {
            $scope.post = data;
        })
    }

    // Funcionalidad para agregar un comentario
    $scope.nuevoComentario = {}
    // IMPLEMENTAR: método agregarComentario()
});
