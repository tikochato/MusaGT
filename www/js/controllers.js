angular.module('MusaGT.controllers', [
  'MusaGT.services'
  , 'MusaGT.httpServices'
  , 'ionic.contrib.ui.hscrollcards'
  , 'ngImageViewer'
  , 'leaflet-directive',
  , 'fab-component'
  , 'ngCordova'
  , 'igTruncate'
])

.controller('MapaCtrl', function(
  $scope,
  $cordovaGeolocation) {

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
        lat : 14.64177,
        lng : -90.51327,
        zoom : 12
      },
      icon: {
        iconUrl: 'img/marker-icon.png',
        iconRetinaUrl: 'img/marker-icon.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14],
        shadow:{
          url: 'img/marker-shadow.png',
            retinaUrl: 'mg/marker-shadow.png',
            size: [41, 41],
            anchor: [12, 40]
        }
      }
    };

    $scope.$on('leafletDirectiveMap.click', function(event){
        /*Codigo*/
    });

    $scope.$on('leafletDirectiveMap.popupopen', function(event, data){

        var position = data.leafletEvent.popup._latlng;
        var label = encodeURI('Abrir maps');
        launchnavigator.navigate([position.lat,position.lng], {
           //start: "50.342847, -4.749904"
        });
    });

    $scope.map.markers = {
      arqueologia : {
        lat:14.5976647,
        lng:-90.5296395,
        message: "Museo Nacional de Arqueología y Etnología",
        focus: false,
        draggable: false
      },
      miraflores : {
        lat:14.62038,
        lng:-90.55424,
        message: "Museo Miraflores",
        focus: false,
        draggable: false
      },
      popolvuh : {
        lat: 14.6080267,
        lng:-90.5051404,
        message: "Museo PopolVuh",
        focus: false,
        draggable: false
      },
      ferrocarril : {
        lat:14.6301376,
        lng:-90.5113273,
        message: "Museo del Ferrocarril",
        focus: false,
        draggable: false
      },
      musac : {
        lat:14.63871,
        lng:-90.51074,
        message: "Musac",
        focus: false,
        draggable: false
      },
      numismatico : {
        lat:14.6258447,
        lng:-90.5137542,
        message: "Museo Numismático",
        focus: false,
        draggable: false
      },
      ninios : {
        lat:14.5972161,
        lng:-90.5275476,
        message: "Museo de los Niños",
        focus: false,
        draggable: false
      },
      arquidiocesano : {
        lat:14.64128,
        lng:-90.51229,
        message: "Museo Arquidiocesano de Santiago de Guatemala",
        focus: false,
        draggable: false
      },
      jardin : {
        lat:14.6145913,
        lng:-90.5128698,
        message: "Museo Jardín Botánico del Centro de Estudios Conservacionistas USAC",
        focus: false,
        draggable: false
      },
      mima : {
        lat:14.63433,
        lng:-90.51265,
        message: "Museo Casa MIMA",
        focus: false,
        draggable: false
      }
    };

    var Location = function() {
      if ( !(this instanceof Location) ) return new Location();
      this.lat  = "";
      this.lng  = "";
      this.name = "";
    };

    $scope.locate = function(){
      console.log($scope.map);
      var posOptions = {timeout: 10000, enableHighAccuracy: true};
      $cordovaGeolocation
      .getCurrentPosition(posOptions)
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

      }, function(err) {
        console.log(JSON.stringify(err));
        // error
        console.log("Location error!");
        console.log(err.message);
      });

    };
  }) //MapaCtrl

  .controller('MuseosCtrl', function($scope, $state, Museos) {
    $scope.showSearchBar = false;
    var museos = Museos.all();
    $scope.museosArqueologico = [];
    $scope.museosIndustrial = [];
    $scope.museosHistorico = [];
    $scope.museosCiencia = [];
    $scope.museosReligion = [];
    $scope.museosNatural = [];
    $scope.museosCasa = [];
    for (i = 0; i < museos.length; i++) {
      var tipoActual = museos[i].tipoMuseo;
      museos[i].tipoMuseo = Museos.getTipo(museos[i].tipoMuseo).tipo;
      switch(tipoActual){
        case 0:
        $scope.museosArqueologico.push(museos[i]);
        break;
        case 1:
        $scope.museosIndustrial.push(museos[i]);
        break;
        case 2:
        $scope.museosHistorico.push(museos[i]);
        break;
        case 3:
        $scope.museosCiencia.push(museos[i]);
        break;
        case 4:
        $scope.museosReligion.push(museos[i]);
        break;
        case 5:
        $scope.museosNatural.push(museos[i]);
        break;
        case 6:
        $scope.museosCasa.push(museos[i]);
        break;
      }
    }

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

  .controller('MuseoCtrl', function($scope, $state, $stateParams, $ionicPopover, $ionicModal, $timeout, $sce, $q, Museos) {
    $scope.museo = Museos.get($stateParams.museoId);
    $scope.vm = this;
    $scope.historia = $sce.trustAsHtml($scope.museo.historia);
    $scope.informacion = $sce.trustAsHtml($scope.museo.informacion);
    //Variables para galeria de imagenes
    $scope.imgs = $scope.museo.imagenes;
    //Variables para comentarios
    $scope.mostrarNuevoComentario = false;
    $scope.mostrarAgregarComentario = true;
    $scope.mostrarAgregarEventos = true;
    $scope.comentarios = [];
    $scope.eventos = [];

    //**Inicializa el dropDown Menu
    $ionicPopover.fromTemplateUrl('templates/museos/museo-dropdownMenu.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.vm.popover = popover;
    });

    $scope.$on("$ionicView.enter", function(scopes, states) {
      console.log(states.stateName);
      if(states.stateName == 'tab.museos-comentarios'){
        Museos.getComentariosBDD($stateParams.museoId)
        .then(function(data){
          $scope.comentarios = data;
        });
      }else if(states.stateName == 'tab.museos-eventos'){
        Museos.getEventosMuseoBDD($stateParams.museoId)
        .then(function(data){
          $scope.eventos = data;
        });
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
    $scope.mostrarNuevoComentario = false;
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
    $scope.textoComentario.texto="";
    $scope.mostrarNuevoComentario = false;
    $scope.actualizarComentarios();
  }

  $scope.actualizarComentarios = function(){
    try{
      Museos.getComentarios()
      .then(function(data){
        Museos.getComentariosBDD($stateParams.museoId)
        .then(function(datos){
          $scope.comentarios = datos;
          $scope.$broadcast('scroll.refreshComplete');
        });
      });
      $scope.textoComentario.texto="";
      $scope.mostrarNuevoComentario = false;
    }catch(error){
      console.log(error);
      $scope.$broadcast('scroll.refreshComplete');
    }
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
  };
  $scope.actualizarEventos = function(){
    try{
      Museos.getEventos()
      .then(function(data){
        Museos.getEventosMuseoBDD($stateParams.museoId)
        .then(function(datos){
          $scope.eventos = datos;
          $scope.$broadcast('scroll.refreshComplete');
        });
      });
    }catch(error){
      console.log(error);
      $scope.$broadcast('scroll.refreshComplete');
    }
  }
  //Eventos

}) //MuseoCtrl

.controller('EventosCtrl', function($scope, Museos) {
  $scope.showSearchBar = false;
  $scope.mostrarAgregarEventos = true;
  $scope.eventos = [];

  $scope.$on('$ionicView.enter', function(e) {
    $scope.searchBar.searchText = "";
    Museos.getEventosMuseosBDD()
    .then(function(datos){
      $scope.eventos = datos;
    });
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

  $scope.actualizarEventos = function(){
    try{
      Museos.getEventos()
      .then(function(data){
        Museos.getEventosMuseosBDD()
        .then(function(datos){
          $scope.eventos = datos;
          $scope.$broadcast('scroll.refreshComplete');
        });
      });
    }catch(error){
      console.log(error);
      $scope.$broadcast('scroll.refreshComplete');
    }
  }

}); //EventosCtrl
