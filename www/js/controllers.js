angular.module('MusaGT.controllers', [])

.controller('MapaCtrl', function($scope) {})

.controller('MuseosCtrl', function($scope, Chats) {
  $scope.showSearchBar = false;

  $scope.$on('$ionicView.enter', function(e) {});

  /**
    Metodo que muestra/oculta la barra de búsqueda
  */
  $scope.searchBar = function() {
    if ($scope.showSearchBar) {
      $scope.showSearchBar = false;
    } else {
      $scope.showSearchBar = true;
    }
  };
})

.controller('MuseoCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('EventosCtrl', function($scope) {
  $scope.showSearchBar = false;

  /**
    Metodo que muestra/oculta la barra de búsqueda
  */
  $scope.searchBar = function() {
    if ($scope.showSearchBar) {
      $scope.showSearchBar = false;
    } else {
      $scope.showSearchBar = true;
    }
  };
  
});
