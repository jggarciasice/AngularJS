(function(){
'use strict';
angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.items = "";
  $scope.message = "";
  $scope.evaluate = function(){
    var cadena = $scope.items.split(',');
    var c = 0, i = 0, j;
    while( (c <= 3) && (i < cadena.length) ){
      if(cadena[i] != ""){
          j = 0;
          while( (cadena[i][j] == " ") && (j<cadena[i].length) ){
            j++;
          }
          if(j != cadena[i].length){
            c++;
          }
      }
      i++;
    }
    if( c == 0 ){
      $scope.message = "Please enter data first";
      $scope.style={
        color:"red"
      }
      $scope.style2={
        borderColor:"red"
      }
    }else{
      $scope.style={
        color:"green"
      }
      $scope.style2={
        borderColor:"green"
      }
      if( c <= 3 ){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "To much!";
      }
    }
  };
};
})();
