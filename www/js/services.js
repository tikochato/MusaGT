angular.module('MusaGT.services', [])

.factory('Museos', function() {
  var tipoMuseos = [{
    id: 0,
    tipo: 'Museo Arqueológico'
  },{
    id: 1,
    tipo: 'Museo de Patrimonio Industrial'
  },{
    id: 2,
    tipo: 'Museo de Patrimonio Histórico'
  },{
    id: 3,
    tipo: 'Museo de Ciencia y Tecnología'
  },{
    id: 4,
    tipo: 'Museo de Religión'
  },{
    id: 5,
    tipo: 'Museo de Patrimonio Natural'
  },{
    id: 6,
    tipo: 'Casa Museo'
  }];

  // Museos
  var museos = [{
    id: 0,
    nombre: 'Museo Nacional de Arqueología y Etnología',
    tipoMuseo: 0,
    descripcion: 'descripcion',
    imagen: 'img/museos/arqueologia_y_etnologia/0.png'
  }, {
    id: 1,
    nombre: 'Museo Miraflores',
    tipoMuseo: 0,
    descripcion: 'descripcion',
    imagen: 'img/museos/miraflores/0.jpg'
  }, {
    id: 2,
    nombre: 'Museo PopolVuh',
    tipoMuseo: 0,
    descripcion: 'descripcion',
    imagen: 'img/museos/popolvuh/0.jpg'
  }, {
    id: 3,
    nombre: 'Museo del Ferrocarril',
    tipoMuseo: 1,
    descripcion: 'descripcion',
    imagen: 'img/museos/ferrocarril/0.jpeg'
  }, {
    id: 4,
    nombre: 'Musac',
    tipoMuseo: 2,
    descripcion: 'descripcion',
    imagen: 'img/museos/musac/0.jpg'
  }, {
    id: 5,
    nombre: 'Museo Numismático',
    tipoMuseo: 2,
    descripcion: 'descripcion',
    imagen: 'img/museos/numismatico/0.jpg'
  }, {
    id: 6,
    nombre: 'Museo de los Niños',
    tipoMuseo: 3,
    descripcion: 'descripcion',
    imagen: 'img/museos/de_los_ninos/0.jpg'
  }, {
    id: 7,
    nombre: 'Museo Arquidiocesano de Santiago de Guatemala',
    tipoMuseo: 4,
    descripcion: 'descripcion',
    imagen: 'img/museos/arquidiocesano/0.jpg'
  }, {
    id: 8,
    nombre: 'Museo Jardín Botánico USAC',
    tipoMuseo: 5,
    descripcion: 'descripcion',
    imagen: 'img/museos/jardin_botanico/0.JPG'
  }, {
    id: 9,
    nombre: 'Museo Casa MIMA',
    tipoMuseo: 6,
    descripcion: 'descripcion',
    imagen: 'img/museos/mima/0.JPG'
  }];

  return {
    all: function() {
      return museos;
    },
    remove: function(museo) {
      museos.splice(museos.indexOf(museo), 1);
    },
    get: function(museoId) {
      for (var i = 0; i < museos.length; i++) {
        if (museos[i].id === parseInt(museoId)) {
          return museos[i];
        }
      }
      return null;
    },
    getTipo: function(tipoId) {
      for (var i = 0; i < tipoMuseos.length; i++) {
        if (tipoMuseos[i].id === parseInt(tipoId)) {
          return tipoMuseos[i];
        }
      }
      return null;
    }
  };
});
