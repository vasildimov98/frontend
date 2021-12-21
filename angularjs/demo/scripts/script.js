let myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    let employee = {
      firstName: "Vasil",
      lastName: "Dimov",
      gender: "Male",
    };

    let country = {
      name: "Bulgaria",
      capital: "Sofia",
      flag: "../images/bulgarian-flag.png",
    };

    var employees = [
      {
        name: "Ben",
        dateOfBirth: new Date("November 23, 1980"),
        gender: 1,
        salary: 55000.788,
        city: "London",
      },
      {
        name: "Sara",
        dateOfBirth: new Date("May 05, 1970"),
        gender: 2,
        salary: 68000,
        city: "London",
      },
      {
        name: "Mark",
        dateOfBirth: new Date("August 15, 1974"),
        gender: 1,
        salary: 57000,
        city: "London",
      },
      {
        name: "Pam",
        dateOfBirth: new Date("October 27, 1979"),
        gender: 2,
        salary: 53000,
        city: "Japan",
      },
      {
        name: "Todd",
        dateOfBirth: new Date("December 30, 1983"),
        gender: 1,
        salary: 60000,
        city: "Berlin",
      },
      {
        name: "Vasil",
        dateOfBirth: new Date("February 07, 1998"),
        gender: 1,
        salary: 1900,
        city: "Sofia",
      },
      {
        name: "Pesho",
        dateOfBirth: new Date("February 07, 1998"),
        gender: 3,
        salary: 10000,
        city: "Pernik",
      },
    ];

    let countries = [
      {
        name: "UK",
        cities: [
          { name: "London" },
          { name: "Birmingham" },
          { name: "Manchester" },
        ],
      },
      {
        name: "USA",
        cities: [
          { name: "Los Angeles" },
          { name: "Chicago" },
          { name: "Houston" },
        ],
      },
      {
        name: "India",
        cities: [
          { name: "Hyderabad" },
          { name: "Chennai" },
          { name: "Mumbai" },
        ],
      },
    ];

    let technologies = [
      { name: "C#", like: 0, disslike: 0 },
      { name: "ASP.NET Core", like: 0, disslike: 0 },
      { name: "JavaScript", like: 0, disslike: 0 },
      { name: "AngularJS", like: 0, disslike: 0 },
    ];

    let modelViews = [
        {
            name: "Technology Table",
            value: "technology-table.html",
        },
        {
            name: "Country List",
            value: "country-list.html",
        },
        {
            name: "Employee Table",
            value: "employee-table.html",
        },
        {
            name: "AngularJS Intro",
            value: "angularjs-intro.html",
        }
    ];

    $scope.message = "AngularJS Tutorial";
    $scope.employee = employee;
    $scope.employees = employees;
    $scope.country = country;
    $scope.countries = countries;
    $scope.technologies = technologies;
    $scope.rowsLimit = employees.length;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    $scope.modelView = modelViews[0].value;
    $scope.modelViews = modelViews;

    $scope.search = function (filter) {
      if ($scope.searchText == undefined) {
        return true;
      }

      if (
        filter.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
      ) {
        return true;
      }

      if (
        filter.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
      ) {
        return true;
      }

      return false;
    };

    $scope.sortData = function (column) {
      $scope.reverseSort =
        $scope.sortColumn == column ? !$scope.reverseSort : false;
      $scope.sortColumn = column;
    };

    $scope.getSortClass = function (column) {
      return $scope.sortColumn == column
        ? $scope.reverseSort
          ? "arrow-down"
          : "arrow-up"
        : "";
    };

    $scope.increamentLikes = function (technology) {
      technology.like++;
    };

    $scope.increamentDisslikes = function (technology) {
      technology.disslike++;
    };
  });
