const myApp = angular.module("myDictionary", []);

myApp.controller("MyController", function MyController($scope, $http){
    let jsonFile = "js/data.json";
    $http.get(jsonFile)
        .then(function(res){
            console.log("http get entered");
            $scope.musicians = res.data;
            $scope.musicianOrder = "name";
        });
});