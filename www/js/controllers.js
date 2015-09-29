angular.module('MusaGT.controllers', [])

.controller('MapaCtrl', function($scope) {})

.controller('MuseosCtrl', function($scope, $ionicPopover) {
  $scope.showSearchBar = false;
  $scope.vm = this;

  $scope.$on('$ionicView.enter', function(e) {});

  //**Inicializa el dropDown Menu
  $ionicPopover.fromTemplateUrl('templates/museos/museo-dropdownMenu.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.vm.popover = popover;
  });


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

.controller('MuseoCtrl', function($scope, $stateParams) {
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
