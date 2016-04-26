angular.module('app').factory("postsService", function($http) {
    // Método públicos del servicio
    return {
        obtenerTodos: function() {
            return $http.get('/api/posts').then(function(res) {
                return res.data;
            });
        },
        obtenerPorId: function(_id) {
            // IMPLEMENTAR la llamda a /api/posts/:_id y devuelve el post modificado
        },
        agregarLike: function(_id) {
            // IMPLEMENTAR la llamda a /api/posts/:_id y devuelve el post modificado.
            // Usar el método POST
        }
    };
});
