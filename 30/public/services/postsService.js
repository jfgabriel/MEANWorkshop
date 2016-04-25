angular.module('app').factory("postsService", function($http) {
    // Método públicos del servicio
    return {
        obtenerTodos: function() {
            return $http.get('/api/posts').then(function(res) {
                return res.data;
            })
        },
        obtenerPorId: function(postId) {
            alert("No implementado");
        },
        buscar: function(texto) {
            alert("No implementado");
        },
        agregarPost: function(post) {
            return $http.post('/api/posts', post).then(function(res) {
                debugger;
                return res.data;
            })
        },
        agregarComentario: function(postId, comentario) {
            alert("No implementado");
        },
        agregarLike: function(postId) {
            alert("No implementado");
        }
    };
});
