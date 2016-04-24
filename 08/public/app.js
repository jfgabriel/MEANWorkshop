// Es es el archivo principal de la aplicación.
// Inicializa el módulo 'app' que depende de otro módulos 'ngRoute'
angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        // Configurar el modo HTML5
        $locationProvider.html5Mode(true);

        // Configurar rutas para angular-route
        $routeProvider
            .when('/', {
                templateUrl: 'public/views/home.html',
                controller: 'HomeController'
            })
    });
