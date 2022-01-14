app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "homeController",
      templateUrl: "./templates/home.html",
    })
    .when("/forecast", {
      controller: "forecastController",
      templateUrl: "./templates/forecast.html",
    })
    .when("/forecast/:city", {
      controller: "forecastController",
      templateUrl: "./templates/forecast.html",
    });
});
