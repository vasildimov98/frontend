let app = angular
    .module("MyModule", [])
    .controller("MyController", function($scope, stringService) {
        $scope.transformString = function(input) {
            $scope.output = stringService.processString(input);
        }
    });