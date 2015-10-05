angular.module('MusaGT.controllers', [
  'MusaGT.services', 'ionic.contrib.ui.hscrollcards'
])

.controller('MapaCtrl', function($scope) {

  }) //MapaCtrl

.controller('MuseosCtrl', function($scope, $state, Museos) {
    $scope.showSearchBar = false;
    var museos = Museos.all();
    for (i = 0; i < museos.length; i++) {
      museos[i].tipoMuseo = Museos.getTipo(museos[i].tipoMuseo).tipo;
    }
    $scope.museos1 = museos.slice(0, (museos.length / 2));
    $scope.museos2 = museos.slice((museos.length / 2), (museos.length));

    $scope.$on('$ionicView.enter', function(e) {
      $scope.museos = Museos.all();
      $scope.searchBar.searchText = "";
    });

    /**
      Ir a museo individual
    */
    $scope.irMuseo = function(idMuseo) {
      $state.go("tab.museos-detail", {
        museoId: idMuseo
      });
    }

    /**
      Metodo que muestra/oculta la barra de búsqueda
    */
    $scope.searchBar = function() {
      if ($scope.showSearchBar) {
        $scope.showSearchBar = false;
        $scope.searchBar.searchText = "";
      } else {
        $scope.showSearchBar = true;
      }
    };

  }) //MuseosCtrl

.controller('MuseoCtrl', function($scope, $state, $stateParams, $ionicPopover, $sce, Museos) {
    $scope.museo = Museos.get($stateParams.museoId);
    $scope.vm = this;
    $scope.historia = $sce.trustAsHtml($scope.museo.historia);

    //**Inicializa el dropDown Menu
    $ionicPopover.fromTemplateUrl('templates/museos/museo-dropdownMenu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.vm.popover = popover;
    });

    /**
      Ir a historia
    */
    $scope.irHistoria = function(idMuseo) {
      $scope.vm.popover.hide();
      $state.go("tab.museos-historia", {
        museoId: idMuseo
      });
    }; //Historia

    /**
      Ir a Informacion
    */
    $scope.irInformacion = function(idMuseo) {
      $scope.vm.popover.hide();
      $state.go("tab.museos-detail", {
        museoId: idMuseo
      });
    }; //Informacion

    /**
      Ir a Galeria
    */
    $scope.irGaleria = function(idMuseo) {
      $scope.vm.popover.hide();
      $state.go("tab.museos-galeria", {
        museoId: idMuseo
      });
    }; //Galeria

    /**
      Ir a Comentarios
    */
    $scope.irComentarios = function(idMuseo) {
      $scope.vm.popover.hide();
      $state.go("tab.museos-comentarios", {
        museoId: idMuseo
      });
    }; //Comentarios

    /**
      Ir a Eventos
    */
    $scope.irEventos = function(idMuseo) {
      $scope.vm.popover.hide();
      $state.go("tab.museos-eventos", {
        museoId: idMuseo
      });
    }; //Eventos

  }) //MuseoCtrl

.controller('EventosCtrl', function($scope) {
  $scope.showSearchBar = false;

  $scope.$on('$ionicView.enter', function(e) {
    $scope.searchBar.searchText = "";
  });

  /**
    Metodo que muestra/oculta la barra de búsqueda
  */
  $scope.searchBar = function() {
    if ($scope.showSearchBar) {
      $scope.showSearchBar = false;
      $scope.searchBar.searchText = "";
    } else {
      $scope.showSearchBar = true;
    }
  };

}); //EventosCtrl
