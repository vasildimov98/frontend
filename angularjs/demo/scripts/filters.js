myApp.filter("gender", function () {
  return function (genderNum) {
    switch (genderNum) {
      case 1:
        return "Male";
      case 2:
        return "Female";
      case 3:
        return "Not dissclosed";
    }
  };
});
