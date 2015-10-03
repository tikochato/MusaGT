angular.module('MusaGT.controllers', [
  'MusaGT.services',
  'ionic.contrib.ui.hscrollcards',
  'leaflet-directive', 'ngCordova', 'igTruncate',
])

.controller('MapaCtrl', function(
        $scope,
        $cordovaGeolocation    ) {


     $scope.map = {
       defaults: {
         tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
         maxZoom: 18,
         zoomControlPosition: 'bottomleft'
       },
       markers : {
       },
       events: {
         map: {
           enable: ['context'],
           logic: 'emit'
         }
       },
       center:{
          lat : 51.500152,
          lng : -0.126236,
          zoom : 12
        }
     };

          var Location = function() {
            if ( !(this instanceof Location) ) return new Location();
            this.lat  = "";
            this.lng  = "";
            this.name = "";
          };

          $scope.locate = function(){

                  $cordovaGeolocation
                    .getCurrentPosition()
                    .then(function (position) {
                      $scope.map.center.lat  = position.coords.latitude;
                      $scope.map.center.lng = position.coords.longitude;
                      $scope.map.center.zoom = 15;

                      $scope.map.markers.now = {
                        lat:position.coords.latitude,
                        lng:position.coords.longitude,
                        message: "You Are Here",
                        focus: true,
                        draggable: false
                      };
                        console.log($scope.map);


                    }, function(err) {
                      // error
                      console.log("Location error!");
                      console.log(err);
                    });

                };



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

.controller('MuseoCtrl', function($scope, $state, $stateParams, $ionicPopover, Museos) {
    $scope.museo = Museos.get($stateParams.museoId);
    $scope.vm = this;

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
      $state.go("tab.museos-detail", {
        museoId: idMuseo
      });
    }; //Historia

    /**
      Ir a Informacion
    */
    $scope.irInformacion = function(idMuseo) {
      $scope.vm.popover.hide();
      $state.go("tab.museos-informacion", {
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
