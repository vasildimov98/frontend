app
  .service("cityService", function () {
    this.name = "Sofia, Bulgaria";

    this.formatName = function (name) {
      name = name.replace("_", " ");
      var separateWord = name.toLowerCase().split(" ");
      for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] =
          separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }
      return separateWord.join(" ");
    };
  })
  .service("weatherService", ["$resource", function($resource) {
    this.getWeatherData = function (cityName) {
        let weatherAPI = $resource(
            "http://api.openweathermap.org/data/2.5/weather?APPID=d211ef1757621c41bce8af0420d1f736",
            { callback: "JSON_CALLBACK" },
            { get: { method: "JSONP" } }
          );
    
          return weatherResult = weatherAPI.get({
            q: cityName,
          });
    }
  }]);
