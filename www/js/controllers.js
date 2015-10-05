angular.module('MusaGT.controllers', [
  'MusaGT.services'
  , 'ionic.contrib.ui.hscrollcards'
  , 'ngImageViewer'
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

.controller('MuseoCtrl', function($scope, $state, $stateParams, $ionicPopover, $ionicModal, $timeout, $sce, Museos) {
  $scope.museo = Museos.get($stateParams.museoId);
  $scope.vm = this;
  $scope.historia = $sce.trustAsHtml($scope.museo.historia);
  //Variables para galeria de imagenes
  $scope.imgs = $scope.museo.imagenes;

  //**Inicializa el dropDown Menu
  $ionicPopover.fromTemplateUrl('templates/museos/museo-dropdownMenu.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.vm.popover = popover;
  });

  //*** Galeria
  $scope.imgGroups = undefined;
  $scope.currentImgId = undefined;
  $scope.fullViewModal = undefined;

  $scope.getImageKey = function (groupKey, photoKey) {
    return groupKey * 3 + photoKey;
  };

  $scope.separateByGroups = function (imgs) {
    return imgs.reduce(function (result, item) {
      var lastItemKey, nextItemKey, key;
      lastItemKey = result.length - 1;
      nextItemKey = result.length;
      key = lastItemKey;
      if (nextItemKey == 0 || result[lastItemKey].length == 3) {
        result[nextItemKey] = [];
        key = nextItemKey;
      }
      result[key].push(item);
      return result;
    }, []);
  };

  $scope.openFullImg = function (groupKey, imgKey) {
    $scope.currentImgId = $scope.getImageKey(groupKey, imgKey);
    $scope.fullViewModal.show();
  };

  $scope.closeFullImg = function (evt) {
    if (!angular.element(evt.target).hasClass('full-image-view')) {
      return false;
    }
    $scope.fullViewVisible = false;
  };

  $scope.imgGroups = $scope.separateByGroups($scope.imgs);
  $ionicModal
  .fromTemplateUrl('lib/ionic-gallery/image-viewer-modal.html', { scope: $scope })
  .then(function (modal) {
    if (!modal) {
      return false;
    }
    $scope.fullViewModal = modal;
    /*
    $timeout(function () {
      $scope.openFullImg(0, 0);
    }, 300);
    */
  } );
  //***galeria

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
