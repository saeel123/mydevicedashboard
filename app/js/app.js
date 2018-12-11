var app = angular.module("myapp", ['ngRoute', 'ngStorage', 'angularUtils.directives.dirPagination'])

app.config( function($routeProvider, $httpProvider) {
    // ===================================== ROUTING =====================================
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
    })
} );