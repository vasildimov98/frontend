var app = angular
            .module("DemoRoute", ["ngRoute"])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
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
                    .otherwise({
                        redirectTo: "/home"
                    })
                    $locationProvider.html5Mode(true);
            })
            .controller("homeController", function ($scope) {
                $scope.message ="Welcome to Home Page"
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", ".NET", "Python", "SQL Server", "AngularJS"]
            })
            .controller("studentsController", function ($scope) {
                $scope.students = ["Vasil Dimov", "Georgi Dimov", "Peter Pettigrew", "Harry Potter", "Hermione Granger", "Albus Dumbledore"]
            });