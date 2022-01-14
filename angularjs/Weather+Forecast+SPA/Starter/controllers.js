app.controller("homeController", [
    "$scope",
    "$location",
    "cityService",
    function ($scope, $location, cityService) {
      $scope.cityName = cityService.name;

      $scope.submit = function() {
        $location.path("/forecast")
      }

      $scope.$watch("cityName", function () {
        cityService.name = $scope.cityName;
      });
    },
  ])
  .controller("forecastController", [
    "$scope",
    "$routeParams",
    "cityService",
    "weatherService",
    function ($scope, $routeParams, cityService, weatherService) {
      $scope.cityName = $routeParams.city || cityService.name;

      $scope.cityName = cityService.formatName($scope.cityName);

      $scope.weatherResult = weatherService.getWeatherData($scope.cityName);
      
      $scope.convertDate = function (date) {
        return new Date(date * 1000);
      };

      $scope.convertToCelsiusFromKelvin = function (degK) {
        return Math.round(degK - 273.15);
      };

      $scope.$watch("cityName", function () {
        cityService.name = $scope.cityName;
      });
    },
]);