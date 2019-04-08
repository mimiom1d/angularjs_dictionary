var myControllers = angular.module("myControllers", []);

myControllers.controller("SearchController", 
    function MyController($scope, $http){
        let jsonFile = "js/data.json";
        $http.get(jsonFile)
            .then(function(res){
                console.log("http get entered");
                $scope.musicians = res.data;
                $scope.musicianOrder = "name";
        });
});

myControllers.controller("DetailsController", 
    function MyController($scope, $http, $routeParams){
        let jsonFile = "js/data.json";
        $http.get(jsonFile)
            .then(function(res){
                console.log("http details get entered");
                $scope.musicians = res.data;
                $scope.whichItem = $routeParams.itemId;

                if($routeParams.itemId > 0){
                    $scope.prevItem = Number($routeParams.itemId) -1;
                }else{
                    $scope.prevItem = $scope.musicians.length -1;
                }

                if($routeParams.itemId < $scope.musicians.length-1){
                    $scope.nextItem = Number($routeParams.itemId) + 1;
                }else{
                    $scope.nextItem = 0;
                }
        });
});