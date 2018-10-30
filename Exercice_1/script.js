var schoolApp = angular.module('schoolApp',[]);
// On déclare un module 'schoolApp' grace à la fonction angular.module
//On déclare le controleur (studentsCtrl) qu'on ratache au module 'schoolApp'
// $scope est un parametre du ctrl et fait la liaison entre JS et HTML
schoolApp.controller('studentsCtrl',function($scope){
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});
