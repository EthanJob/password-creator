const app = angular.module('PasswordApp', []);

app.controller('MainController', function($scope) {

  $scope.passwordLength = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

  this.password = '';

  this.characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

this.run = () => {
  this.password = '';
  for (var i = 0; i < $scope.selectedLength; i++) {
    this.item = Math.floor(Math.random() * this.characters.length);
    this.password += this.characters[this.item];
  }
  console.log('New password: ', this.password);
};

});
