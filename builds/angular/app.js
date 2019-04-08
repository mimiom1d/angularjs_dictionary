const myApp = angular.module("myApp", [
    'ngRoute'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
        })
        .when('/loggedin', {
            templateUrl: 'views/search.html',
            controller: 'SearchController'
        })
        .when('/details/:itemId', {
            templateUrl: 'views/details.html',
            controller: 'DetailsController'
        })
        .otherwise({ // ** defaul route
            redirectTo: '/login'
        })
}]);
