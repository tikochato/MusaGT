angular.module('MusaGT.controllers', [
  'MusaGT.services'
])

.controller('MapaCtrl', function($scope) {

  }) //MapaCtrl

.controller('MuseosCtrl', function($scope, Museos) {
    $scope.showSearchBar = false;
    $scope.museos = Museos.all();

    $scope.$on('$ionicView.enter', function(e) {
      $scope.museos = Museos.all();
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
  }) //MuseosCtrl

.controller('MuseoCtrl', function($scope, $stateParams, $ionicPopover, Museos) {
    $scope.museo = Museos.get($stateParams.museoId);
    $scope.tipoMuseo = Museos.getTipo($scope.museo.tipoMuseo);
    $scope.vm = this;

    //**Inicializa el dropDown Menu
    $ionicPopover.fromTemplateUrl('templates/museos/museo-dropdownMenu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.vm.popover = popover;
    });

  }) //MuseoCtrl

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

}); //EventosCtrl
