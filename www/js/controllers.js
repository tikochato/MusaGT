angular.module('MusaGT.controllers', [
  'MusaGT.services'
  , 'ionic.contrib.ui.hscrollcards'
  , 'ngImageViewer'
  , 'leaflet-directive',
  , 'fab-component'
  , 'ngCordova'
  , 'igTruncate'
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
      console.log("locate");
      $cordovaGeolocation
      .getCurrentPosition()
      .then(function (position) {
        $scope.map.center.lat  = position.coords.latitude;
        $scope.map.center.lng = position.coords.longitude;
        $scope.map.center.zoom = 15;

        $scope.map.markers.now = {
          lat:position.coords.latitude,
          lng:position.coords.longitude,
          message: "Te encuentras aqui",
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

  .controller('MuseoCtrl', function($scope, $state, $stateParams, $ionicPopover, $ionicModal, $timeout, $sce, Museos) {
    $scope.museo = Museos.get($stateParams.museoId);
    $scope.vm = this;
    $scope.historia = $sce.trustAsHtml($scope.museo.historia);
    $scope.informacion = $sce.trustAsHtml($scope.museo.informacion);
    //Variables para galeria de imagenes
    $scope.imgs = $scope.museo.imagenes;
    //Variables para comentarios
    $scope.mostrarNuevoComentario = false;
    $scope.mostrarAgregarComentario = true;
    $scope.comentarios = [];
    var options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    //**Inicializa el dropDown Menu
    $ionicPopover.fromTemplateUrl('templates/museos/museo-dropdownMenu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.vm.popover = popover;
    });

    $scope.$on("$ionicView.enter", function(scopes, states) {
      try{
        $scope.comentarios = Museos.getComentarios($stateParams.museoId);
        $scope.comentarios.forEach(function(comentario){
          comentario.fecha = comentario.fecha.toLocaleTimeString("es-gt", options);
        });
        $scope.mostrarAgregarComentario = $scope.comentarios.length <= 0;
        $scope.$apply();
      }catch(error){
        console.log(error);
      }
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

    $scope.cerrarModal = function(){
      $scope.fullViewModal.hide();
    }

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
  };

  $scope.nuevoComentario = function(){
    $scope.mostrarNuevoComentario = !$scope.mostrarNuevoComentario;
  }
$scope.textoComentario ={
    texto:""
};

  $scope.agregarComentario = function(){
    Museos.addComentario($stateParams.museoId, $scope.rangeMuseo.rating, $scope.textoComentario.texto);
    var comentario = {
      id : 6,
      idMuseo : $stateParams.museoId,
      fecha : new Date(),
      calificacion : $scope.rangeMuseo.rating,
      comentario : $scope.textoComentario.texto
    }
    comentario.fecha = comentario.fecha.toLocaleTimeString("es-gt", options);
    $scope.comentarios.unshift(comentario);
    $scope.textoComentario.texto="";
    $scope.mostrarNuevoComentario = false;
  }

  $scope.actualizarComentarios = function(){
    $scope.$apply(function() {
      $scope.comentarios = Museos.getComentarios($stateParams.museoId);
    });
    $scope.textoComentario.texto="";
    $scope.mostrarNuevoComentario = false;
    $scope.$broadcast('scroll.refreshComplete');
  }

  //Valores iniciales para la directiva de calificacion
      $scope.rangeMuseo = {
        iconOn: 'ion-ios-star',    //Optional
        iconHalf: 'ion-ios-star-half', //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: 'rgb(255, 153, 20)',  //Optional
        iconOffColor:  'rgb(255, 193, 7)',    //Optional
        ratingLabel: "Calificar:", //Optional
        rating:  0, //Optional
        minRating: 0,    //Optional
        readOnly: true, //Optional
        callback: function(rating) {    //Mandatory
          this.rating = rating;
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ' + rating);
      };
  //Comentarios

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
