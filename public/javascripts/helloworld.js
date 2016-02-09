/* global app */
/* global angular */

app = angular.module('helloworldapp', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '../helloworld.html',
            controller: 'HelloworldCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });
}]);


app.controller('HelloworldCtrl', ['$scope', '$resource', '$location',
    function($scope, $resource, $location){

         $scope.sTitle ='Hello World As a title' ; 
        
        $scope.save = function()
        {
            //alert($scope.team);
          
            //var team = $resource('/api/registration');
            //team.save($scope.team, function(){
                //$location.path('/play');
            //});
          
        };
    }]);


