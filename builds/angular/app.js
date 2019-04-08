const myApp = angular.module("myDictionary", [
    'ngRoute',
    'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'js/template/search.html',
            controller: 'SearchController'
        })
        .when('/details/:itemId', {
            templateUrl: 'js/template/details.html',
            controller: 'DetailsController'
        })
}]);
