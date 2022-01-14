var app = angular
  .module("DemoRoute", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "templates/home.html",
        controller: "homeController",
      })
      .when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeController",
      })
      .when("/courses", {
        templateUrl: "templates/courses.html",
        controller: "coursesController",
      })
      .when("/students", {
        templateUrl: "templates/students.html",
        controller: "studentsController",
      })
      .when("/student/:num", {
        templateUrl: "templates/student.html",
        controller: "studentController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  })
  .service("nameService", function () {
    let self = this;
    this.name = "Vasil Dimov";

    this.nameLength = function () {
      return self.name.length;
    };
  })
  .directive("searchResult", function () {
    return {
      templateUrl: "/directives/searchResult.html",
      replace: true,
      scope: {
        person: "<",
        formatAddress: "&",
      },
    };
  })
  .controller("studentController", [
    "$scope",
    "$log",
    "$routeParams",
    "nameService",
    function ($scope, $log, $routeParams, nameService) {
      $scope.num = $routeParams.num;
      $scope.name = nameService.name;

      $scope.$watch("name", function (newValue, oldValue) {
        if (newValue !== oldValue) {
          nameService.name = $scope.name;
        }
      });

      $log.info($scope.name);
    },
  ])
  .controller("homeController", [
    "$scope",
    "$log",
    "nameService",
    function ($scope, $log, nameService) {
      $scope.people = [
        {
          name: "Vasil Dimov",
          country: "Bulgaria",
          city: "Sofia",
          street: "Something Cool",
          number: 123,
          zip: 1111111111,
        },
        {
            name: "Georgi Dimov",
            country: "Bulgaria",
            city: "Sofia",
            street: "Something Cool",
            number: 123,
            zip: 1111111111,
          },
          {
            name: "Vladimir Dimov",
            country: "Bulgaria",
            city: "Vonyagovci",
            street: "Something Cool",
            number: 123,
            zip: 1111111111,
          },
          {
            name: "Irena Dimova",
            country: "Bulgaria",
            city: "Vonyagovci",
            street: "Something Cool",
            number: 123,
            zip: 1111111111,
          },
      ];

      $scope.formatAddress = function (person) {
        return (
          person.country +
          ", " +
          person.city +
          ", " +
          person.street +
          " #" +
          person.number +
          " " +
          person.zip
        );
      };

      $scope.name = nameService.name;

      $scope.$watch("name", function (newValue, oldValue) {
        if (newValue !== oldValue) {
          nameService.name = $scope.name;
        }
      });

      $log.info(nameService.name);
    },
  ])
  .controller("coursesController", function ($scope) {
    $scope.courses = ["C#", ".NET", "Python", "SQL Server", "AngularJS"];
  })
  .controller("studentsController", function ($scope) {
    $scope.students = [
      "Vasil Dimov",
      "Georgi Dimov",
      "Peter Pettigrew",
      "Harry Potter",
      "Hermione Granger",
      "Albus Dumbledore",
    ];
  });
