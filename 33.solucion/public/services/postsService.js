angular.module('app').factory("postsService", function($http) {
    // Método públicos del servicio
    return {
        obtenerTodos: function() {
            return $http.get('/api/posts').then(function(res) {
                return res.data;
            });
        },
        obtenerPorId: function(_id) {
            return $http.get('/api/posts/' + _id).then(function(res) {
                return res.data;
            });
        },
        agregarLike: function(_id) {
            return $http.post('/api/posts/' + _id + '/likes').then(function(res) {
                return res.data;
            });
        },
        agregarComentario: function(_id, comentario) {
            return $http.post('/api/posts/' + _id + '/comentario', comentario).then(function(res) {
                return res.data;
            });
        }
    };
});
