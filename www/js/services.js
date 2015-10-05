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
    imagen: 'img/museos/arqueologia_y_etnologia/0.png',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 1,
    nombre: 'Museo Miraflores',
    tipoMuseo: 0,
    descripcion: 'descripcion',
    imagen: 'img/museos/miraflores/0.jpg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 2,
    nombre: 'Museo PopolVuh',
    tipoMuseo: 0,
    descripcion: 'descripcion',
    imagen: 'img/museos/popolvuh/0.jpg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 3,
    nombre: 'Museo del Ferrocarril',
    tipoMuseo: 1,
    descripcion: 'descripcion',
    imagen: 'img/museos/ferrocarril/0.jpeg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 4,
    nombre: 'Musac',
    tipoMuseo: 2,
    descripcion: 'descripcion',
    imagen: 'img/museos/musac/0.jpg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 5,
    nombre: 'Museo Numismático',
    tipoMuseo: 2,
    descripcion: 'descripcion',
    imagen: 'img/museos/numismatico/0.jpg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 6,
    nombre: 'Museo de los Niños',
    tipoMuseo: 3,
    descripcion: 'descripcion',
    imagen: 'img/museos/de_los_ninos/0.jpg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 7,
    nombre: 'Museo Arquidiocesano de Santiago de Guatemala',
    tipoMuseo: 4,
    descripcion: 'descripcion',
    imagen: 'img/museos/arquidiocesano/0.jpg',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 8,
    nombre: 'Museo Jardín Botánico USAC',
    tipoMuseo: 5,
    descripcion: 'descripcion',
    imagen: 'img/museos/jardin_botanico/0.JPG',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
  }, {
    id: 9,
    nombre: 'Museo Casa MIMA',
    tipoMuseo: 6,
    descripcion: 'descripcion',
    imagen: 'img/museos/mima/0.JPG',
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.'
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
