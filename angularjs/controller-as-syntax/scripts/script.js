var app = angular
            .module("Demo", [])
            .controller("countryController", function () {
                this.name = "Bulgaria";
            })
            .controller("stateController", function () {
                this.name = "Sofia-grad";
            })
            .controller("cityController", function () {
                this.name = "Sofia";
            });