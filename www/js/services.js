angular.module('MusaGT.services', [])

.factory('Museos', function() {
  pathArqueologia = 'img/museos/arqueologia_y_etnologia';
  pathMira = 'img/museos/miraflores';

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
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
      +'<div class="item item-body body-tumblr gray"><p>Museo Nacional de Arqueología y Etnología<br />'
          +'7ta. Avenida 6a. Calle zona 13, Salón 5 Finca la Aurora<br />'
          +'Ciudad de Guatemala<br />'
          +'Teléfono./Fax (502) 2475 4399 - 2475 4406 - 2475 4010<br/>'
          +'Email: info@munae.gob.gt<br/>'
          +'Sitio web: http://www.munae.gob.gt </p></div>'
      +'<div class="item item-divider"><strong>Horario</strong></div>'
      +'<div class="item item-body body-tumblr gray"><p>Abierto: <br/>'
          +'De Martes a Viernes de 9:00 a 16:00 horas.<br/>'
          +'Sábados y domingos de 9:00 a 12:00 y de 13:30 a 16:00 horas.<br/><br/>'
          +'Cerrado: <br/>Los lunes<br/>24-25 de diciembre.<br/>31 de diciembre y 1 de enero. </p></div>'
      +'<div class="item item-divider"><strong>Tarifas</strong></div>'
      +'<div class="item item-body body-tumblr gray"><p>Q.5.00 Visitantes nacionales<br/>'
          +'Q.60.00 Visitantes extranjeros<br/>'
          +'Entrada Gratuita:<br/>'
          +'-Niños menores de 9 años acompañados de un adulto. <br/>'
          +'-Escuelas e Institutos públicos<br/>'
          +'Maestros acompañantes: Q.5.00</p></div>'
      +'<div class="item item-divider"><strong>Facilidad de Acceso</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Se cuenta con amplio parque, no hay rampa de acceso para discapacitados o carruajes para niños. Adentro, hay facilidad de desplazamiento.</p></div>'
      +'<div class="item item-divider"><strong>Objetos arqueológicos</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>No está permitido tocar los objetos arqueológicos y etnológicos. Ni el ingreso de artefactos que les puedan causar daño.</p></div>'
      +'<div class="item item-divider"><strong>Cámaras de fotos y video</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Se permite tomar fotografías en las salas únicamente con cámaras de mano. No se permite el uso del flash ni de trípodes. Se podrán efectuar grabaciones de video únicamente con solicitud por escrito y aprobada por la Dirección del museo. Queda prohibida la reproducción, distribución o venta de fotografías sin el permiso del museo</p></div>'
      +'<div class="item item-divider"><strong>Paquetes-Bolsas</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Para proteger las piezas arqueológicas y etnológicas de posibles accidentes, se deberán dejar en la recepción bolsas-paquetes las mochilas (de todos los tamaños), paraguas, paquetes, bolsas y valijas de todo tamaño, así como cualquier bulto grande.</p></div>'
      +'<div class="item item-divider"><strong>Otras normas</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>No está permitida la entrada de animales.<br/>No se permite fumar dentro de las instalaciones del museo.</p></div>'
      +'<div class="item item-divider"><strong>Transporte</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Rutas de transporte urbano. No. 63, No. 83, No. 84, No. 85, Transurbano 250 y 283<br/>A menos de 1Km del aeropuerto la Aurora. </p></div>'
      +'<div class="item item-divider"><strong>Parqueo</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Parqueo propio del complejo de museos.</p></div>'
      +'<div class="item item-divider"><strong>Tienda Chayal</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Abierto:<br/>De Martes a Viernes de 9:00 a 16:00 horas.<br/>Sábados y domingos de 9:00 a 12:00 y de 13:30 a 16:00 horas.<br/>'
          +'Cerrado:<br/>Los lunes, 24-25 de diciembre. 31 de diciembre y 1 de enero. </p></div>'
      +'<div class="item item-divider"><strong>Centro de Documentación</strong></div>'
          +'<div class="item item-body body-tumblr gray"><p>Abierto:<br/>De Martes a Viernes de 9:00 a 16:00 horas.<br/>'
          +'Cerrado:<br/>Los lunes, 24-25 de diciembre. 31 de diciembre y 1 de enero</p></div>'
      +'</div>',
    imagen: pathArqueologia+'/0.png',
    imagenes: [pathArqueologia+'/0.png', pathArqueologia+'/1.jpg', pathArqueologia+'/2.jpg', pathArqueologia+'/3.jpg', pathArqueologia+'/4.jpg'],
    historia: '<p><strong>El Museo Nacional de Arqueología y Etnología (MUNAE)</strong> es una institución guatemalteca encargada de la conservación y exhibición de vestigios y artefactos arqueológicos y etnológicos, pertenecientes al patrimonio cultural e histórico de Guatemala.</p>'
    + '<p>Se trata de un Museo Nacional dedicado también a la investigación de la importante herencia cultural de esta nación mesoamericana.</p>'
    + '<p>Cuenta con aproximadamente 3000 m² de espacio de exhibición y cerca de 1500 m² destinados a la restauración e investigación de las piezas que integran sus varias colecciones. El MUNAE alberga un conjunto de cerca de 20.000 artefactos arqueológicos y a unas 5.000 piezas etnológicas.</p>'
    + '<p><strong>El edificio</strong></p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.</p>'
  }, {
    id: 1,
    nombre: 'Museo Miraflores',
    tipoMuseo: 0,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
      +'<div class="item item-body body-tumblr gray"><p>Museo Miraflores <br />7 calle 21-55 zona 11 - Miraflores<br />Ciudad de Guatemala<br />Tel.: 2470-3415 / 3416 / 3417 /3418<br />Fax: 2475-4612 </p></div>'
      +'<div class="item item-divider"><strong>Horario</strong></div>'
      +'<div class="item item-body body-tumblr gray"><p>Martes a Domingo de 9:00 a 19:00 hrs.<br/>Lunes Cerrado.</p></div>'
      +'<div class="item item-divider"><strong>Tarifas</strong></div>'
      +'<div class="item item-body body-tumblr gray"><p>Q20.00 Guatemaltecos Adultos<br/>Q10.00 Estudiantes y niños<br/>Q40.00 Extranjeros Adultos<br/>Q25.00 Extranjeros estudiantes y niños</p></div>'
      +'</div>',
    imagen: pathMira+'/0.jpg',
    imagenes: [pathMira+'/0.jpg', pathMira+'/1.jpg', pathMira+'/2.jpg', pathMira+'/3.jpg', pathMira+'/4.jpg', pathMira+'/5.jpg', pathMira+'/6.jpg', pathMira+'/7.jpg', pathMira+'/8.jpg', pathMira+'/9.jpg', pathMira+'/10.jpg', pathMira+'/11.jpg'],
    historia: '<p>Abrió sus puertas el 26 de octubre del año 2002 y su administración esta a cargo de la <strong>Fundación Miraflores</strong>.</p>'
    + '<p><strong>Museo Miraflores</strong> es considerado como un vínculo entre el pasado y el presente, que ayuda a comprender la historia, por ser un espacio donde el tiempo y el espacio convergen en un solo lugar, para que el visitante comprenda las raíces ancestrales de los habitantes del valle.</p>'
    + '<p><strong>Exposiciones</strong></p>'
    + '<p>El museo está dedicado a la ciudad maya de Kaminaljuyu, por lo que en su sala principal se exhiben objetos de hasta 3,000 años de antigüedad, descubiertos durante las excavaciones arqueológicas durante décadas de investigación.</p>'
    + '<p>También cuenta con una sala de exposiciones para presentar obras de nuevos valores de la pintura, la escultura, el textil, las artesanías populares y otros más. Los visitantes no podrán concluir su visita sin antes pasear por los senderos del área arqueológica, con tres montículos que recuerdan las antiguas pirámides y puestos de observación. Podrán subir al montículo mayor desde donde se contempla una maravillosa vista de los volcanes que forman parte de la Sierra Madre.</p>'
    + '<p>El Museo cuenta con un edificio de 1,200 m² donde se exhiben alrededor de 500 objetos, mientras que al exterior está la zona arqueológica con tres montículos debidamente conservados, rodeados por árboles y vegetación característica del altiplano.</p>'
    + '<p>Los visitantes descubrirán información sobre escultura, arquitectura, cerámica, ingeniería hidráulica, vestuario, costumbres religiosas y otros aspectos importantes para comprender mejor a los antiguos habitantes de Kaminaljuyu.</strong>'
  }, {
    id: 2,
    nombre: 'Museo PopolVuh',
    tipoMuseo: 0,
    informacion: 'Información',
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
    informacion: 'Información',
    imagen: 'img/museos/ferrocarril/0.jpg',
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
    informacion: 'Información',
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
    informacion: 'Información',
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
    informacion: 'Información',
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
    informacion: 'Información',
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
    informacion: 'Información',
    imagen: 'img/museos/jardin_botanico/0.jpg',
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
    informacion: 'Información',
    imagen: 'img/museos/mima/0.jpg',
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
