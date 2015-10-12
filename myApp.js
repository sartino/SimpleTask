var app = angular.module('myApp', []);

app.controller('Ctrl', ['$scope', '$window', function ($scope, $window) {
      $scope.doGreeting = function (greeting2) {
            $window.alert(greeting2);
      };

      $scope.pressMe = function (greeting) {
            greeting = 'You sure like buttons!';
            $window.alert(greeting);
      };

      // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
      //       (Math.floor(Math.random() * 256)) + ',' +
      //       (Math.floor(Math.random() * 256)) + ')';
      // $scope.myStyleRandom = function () {
      //       $scope.
      // }
      // .click(function () {
      //       $(this).css("color", hue);
      // });
      
    
      
    
}]);