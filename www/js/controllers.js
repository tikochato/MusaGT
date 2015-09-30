angular.module('MusaGT.controllers', [
  'MusaGT.services'
  , 'ionic.contrib.ui.hscrollcards'
])

.controller('MapaCtrl', function($scope) {

  }) //MapaCtrl

.controller('MuseosCtrl', function($scope, $state, Museos) {
    $scope.showSearchBar = false;
    var museos = Museos.all();
    for (i=0; i<museos.length; i++){
      museos[i].tipoMuseo = Museos.getTipo(museos[i].tipoMuseo).tipo;
    }
    $scope.museos1 = museos.slice(0, (museos.length/2));
    $scope.museos2 = museos.slice((museos.length/2), (museos.length));

    $scope.$on('$ionicView.enter', function(e) {
      $scope.museos = Museos.all();
    });

    /**
      Ir a museo individual
    */
    $scope.irMuseo = function(idMuseo){
      $state.go("tab.museos-detail",{museoId:idMuseo});
    }

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

.controller('MuseoCtrl', function($scope, $state, $stateParams, $ionicPopover, Museos) {
  console.log("param: "+$stateParams.museoId);
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
