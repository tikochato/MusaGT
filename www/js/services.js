angular.module('MusaGT.services', [
  'MusaGT.httpServices'
  , 'MusaGT.sqliteServices'
])

.factory('Museos', function($q, httpServices, sqliteServices) {
  pathArqueologia = 'img/museos/arqueologia_y_etnologia';
  pathMira = 'img/museos/miraflores';
  pathPopol = 'img/museos/popolvuh';
  pathMusac = 'img/museos/musac';
  pathFerro = 'img/museos/ferrocarril';
  pathNumismatico = 'img/museos/numismatico';
  pathNinos = 'img/museos/de_los_ninos';
  pathArqui = 'img/museos/arquidiocesano';
  pathJardin = 'img/museos/jardin_botanico';
  pathMima = 'img/museos/mima';
  var imagenEvento = "img/eventos/evento.png";

  var options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
  };

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
    +'<a href="http://www.munae.gob.gt">http://www.munae.gob.gt</a></p></div>'
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
    +'<div class="item item-body body-tumblr gray"><p>Museo Miraflores <br />7 calle 21-55 zona 11 - Miraflores<br />Ciudad de Guatemala<br />Tel.: 2470-3415 / 3416 / 3417 /3418<br />Fax: 2475-4612 <br/><a href="http://www.museomiraflores.org.gt/">http://www.museomiraflores.org.gt/</a></p></div>'
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
    + '<p>Los visitantes descubrirán información sobre escultura, arquitectura, cerámica, ingeniería hidráulica, vestuario, costumbres religiosas y otros aspectos importantes para comprender mejor a los antiguos habitantes de Kaminaljuyu.</strong></p>'
  }, {
    id: 2,
    nombre: 'Museo PopolVuh',
    tipoMuseo: 0,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo Popol Vuh <br />Universidad Francisco Marroquín<br/>Calle Manuel F. Ayau (6 Calle final), zona 10<br/>Guatemala 01010 <br/><a href="www.popolvuh.ufm.edu/">www.popolvuh.ufm.edu/</a></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Lunes-Viernes 9:00-17:00<br/>Sábado 9:00-13:00<br/>Cerrado los domingos. </p></div>'
    +'<div class="item item-divider"><strong>Tarifas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Q35.00 Adultos<br/>Q15.00 Estudiantes con carnet<br/>Q10.00 Niños de 2 a 12 años<br/>Entrada gratuita para estudiantes y personal de la Universidad Francisco Marroquín. </p></div>'
    +'<div class="item item-divider"><strong>Acceso Sillas de Ruedas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>El museo cuenta con rampa de acceso y elevador. </p></div>'
    +'<div class="item item-divider"><strong>Fotografía y filmación</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Cámaras fotográficas Q15.00<br/>Cámaras de video Q25.00<br/>Se prohibe el uso de trípode y flash. </p></div>'
    +'<div class="item item-divider"><strong>Fotografía y filmación profesional</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Solicitar autorización especial, con dos semanas de anticipación, a la oficina de curaduría. Se aplican tarifas especiales. </p></div>'
    +'</div>',
    imagen: 'img/museos/popolvuh/0.jpg',
    imagenes: [pathPopol+'/0.jpg', pathPopol+'/1.jpg', pathPopol+'/2.jpg', pathPopol+'/3.jpg', pathPopol+'/4.jpg'],
    historia: '<p>El <strong>Museo Popol Vuh</strong> fue fundado en 1977 por Jorge y Ella Castillo, a partir de su colección privada de objetos arqueológicos y coloniales. Ya desde los años sesenta, la colección Castillo se consideraba como una de las mejores en Guatemala, y varios objetos de la misma habían participado en exhibiciones internacionales sobre el arte prehispánico de Guatemala. En 1978, los señores Castillo donaron su colección a la <strong>Universidad Francisco Marroquín</strong>, con el objeto de establecer formalmente el museo, que se instaló en la avenida Reforma y 16 calle, zona 10, ciudad de Guatemala. Tres años después, se trasladó al edificio Galerías Reforma, Zona 9 de la misma ciudad, donde permaneció 16 años. A lo largo de este período, la colección creció por medio de varias donaciones particulares, a la vez que se hicieron los primeros esfuerzos de catalogación, restauración y conservación de los materiales. </p>'
    + '<p>Las instalaciones actuales abrieron sus puertas en 1997, dentro del complejo cultural de la Universidad Francisco Marroquín, que incluye el Museo Ixchel del Traje Indígena y el Auditorio Juan Bautista Gutiérrez. Paralelamente, el museo ha desarrollado un programa de actividades docentes dirigidas a escolares de todos los niveles, que busca estimular el interés de la juventud hacia el pasado prehispánico y colonial de Guatemala. Este programa se ha convertido en una de las principales actividades extra-aula en los programas de estudios sociales e historia de Guatemala.</p>'
    + '<p>En años recientes, el Museo Popol Vuh ha tomado participación activa en la vida cultural de Guatemala. En 1998 se creó la Orden del Pop, que el museo entrega anualmente a personas que han dedicado tiempo y esfuerzo significativo al estudio, conservación y divulgación del patrimonio cultural de Guatemala. En el año 2003, se creó el Premio Huun para la prensa arqueológica de Guatemala, que se entrega anualmente al mejor reportaje sobre un tema arqueológico publicado en la prensa escrita del país. Con esto, el museo busca estimular la participación activa de la prensa en la divulgación de temas relacionados con la arqueología de Guatemala. </p>'
    + '<p>El museo se ha convertido un promotor y partícipe de las investigaciones arqueológicas en Guatemala. Desde 1999, ha patrocinado investigaciones arqueológicas de campo en la zona de Santa Lucía Cotzumalguapa, en la costa sur de Guatemala, así como el análisis de los materiales recuperados en las excavaciones dirigidas por el Dr. Oswaldo Chinchilla. El museo colaboró con la organización del Coloquio Guatemalteco de Arte Rupestre, contribuyendo así al conocimiento de uno de los aspectos menos conocidos del patrimonio arqueológico de Guatemala. A la vez, el museo presta apoyo a numerosos investigadores interesados en estudiar objetos de sus colecciones.</p>'
    + '<p>En años recientes, el Museo Popol Vuh ha participado en las exhibiciones más importantes de arte prehispánico y colonial de Guatemala. En forma permanente, mantiene programas de conservación y restauración de los objetos de su colección, y se proyecta al público por medio de conferencias y cursos libres. La exhibición permanente es una de las mejores en su género en Guatemala. Periódicamente se realizan exhibiciones especiales, respaldadas por investigaciones sólidas sobre aspectos específicos de la colección. La visita al <strong>Museo Popol Vuh</strong> es indispensable para todos los interesados en la arqueología maya y el arte prehispánico y colonial de Guatemala. </p>'
  }, {
    id: 3,
    nombre: 'Museo del Ferrocarril',
    tipoMuseo: 1,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo del Ferrocarril<br />9a. avenida 18-03 zona 1<br/>Guatemala<br/>Tel. (502)22329270 / 22383036<br/>Fax (502)22383039<br/>Correo: info@museofegua.com <br/><a href="http://museofegua.com/">http://museofegua.com/</a></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Martes-Viernes 9:00 a 16:00 horas<br/>Sábados y Domingos 10:00 a 16:00 horas<br/>Sábados y Domingos las visitas guiadas requieren una autorización especial.</p></div>'
    +'<div class="item item-divider"><strong>Tarifas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Q2.00 Adultos<br/>Q1.00 Niños</p></div>'
    +'</div>',
    imagen: 'img/museos/ferrocarril/0.jpg',
    imagenes: [pathFerro+'/0.jpg', pathFerro+'/1.jpg', pathFerro+'/2.jpg', pathFerro+'/3.jpg', pathFerro+'/4.jpg', pathFerro+'/5.jpg', pathFerro+'/6.jpg', pathFerro+'/7.jpg'],
    historia: '<p>La idea de establecer un museo ferroviario en Guatemala, data de muchos años atrás, cuando ante el declive de la actividad ferroviaria, un grupo de trabajadores y amantes del ferrocarril, visualizaron que tanto los equipos móviles y material rodante, como se les llama en el lenguaje ferroviario, así como los talleres y estaciones son ejemplares auténticos de la tecnología de la época de la revolución industrial como se dio a finales del siglo XIX e inicio del siglo XX, y que en el transcurso de los años sufrieron pocas modificaciones, por lo que debían ser conservados y resguardados.</p>'
    + '<p>En el año 1991 se informo por el personal de talleres de <strnog>FEGUA</strnog> que existía un plan para negociar la venta de la locomotora a vapor del año 1948, No. 205 que en ese tiempo aun operaba, la cual iban a ser declarada inservible y así venderla a un parque de diversiones en el exterior, surgiendo un movimiento de varios sectores sociales con el propósito de gestionar ante el gobierno la protección de tan importante pieza ferroviaria, que se pretendía sacar del país.</p>'
    + '<p>Para el efecto se recolectaron más de 700 firmas en respaldo de las gestiones realizadas, sin la aparente atención del gobierno, quien en forma discreta tomo las medidas pertinentes para que no se consumara dicha depredación, por lo que con gran satisfacción y orgullo, hoy FEGUA y el Museo del Ferrocarril exhibe en un lugar destacado dicha locomotora.</p>'
    + '<p>Este incidente, constituye el primer caso en Guatemala en que un bien histórico de carácter ferroviario haya sido protegido, con la valiosa y decidida colaboración de la ciudadanía.</p>'
    + '<p>Posteriormente en el periodo 1996-1997, la Locomotora No 34, fabricada en 1897, se pretendía fuera negociada para viajes turísticos al exterior.  Los empleados de FEGUA se opusieron, colocándose sobre la vía férrea para que no fuera sacada de la Estación Central convirtiéndose la locomotora en un icono de los Ferrocarriles de Guatemala.  Los trabajadores manifestaron en ese entonces que. “La 34, únicamente saldría del patio de FEGUA sobre sus cadáveres”.</p>'
    + '<p>Se destaca otro hecho muy importante, relacionado directamente con la preservación de bienes históricos de carácter ferroviario como lo fue la gestión ante el Ministerio de Cultura y Deportes en el año 2005 de la DECLARACIÓN de PATRIMONIO CULTURAL de los edificios, patios y talleres en donde actualmente se encuentra el Museo.</p>'
    + '<p>Finalmente, el Museo abrió sus puertas oficialmente el 8 de enero del 2004 habiéndose instituido también como el <strong>Centro Cultural FEGUA</strong>. El 9 de enero del mismo año se inauguro el Museo del Ferrocarril de Zacapa con los mismos objetivos y funciones del de Guatemala.</p>'
  }, {
    id: 4,
    nombre: 'Musac',
    tipoMuseo: 2,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Musac<br />9a. avenida 9-79, zona 1<br/>Telefax.: (502)2232-0721<br/>Tel.: (502) 2232-7666<br/>musac@intelnet.net.gt<br/>info@musacenlinea.org<br/><a href="http://www.musacenlinea.org/">http://www.musacenlinea.org/</a></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Lunes a viernes de 9:30 a 17:30 hrs.<br/>Sábado 9:30 a 17:00 hrs.<br/>Cerrado: martes, domingos y feriados oficiales</p></div>'
    +'<div class="item item-divider"><strong>Visita Guiada</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>10:00 y 14:00 horas<br/>Grupos reservar con anticipación al Tel. 2232-0721, Ext. 105 con Programa Educativo<br/>Se atienden grupos no mayores de 30 personas. </p></div>'
    +'<div class="item item-divider"><strong>Tarifas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Q1.00 Nacionales<br/>Q8.00 Extranjeros<br/>Entrada Gratuita: Estudiantes y trabajadores universitarios</p></div>'
    +'</div>',
    imagen: 'img/museos/musac/0.jpg',
    imagenes: [pathMusac+'/0.jpg', pathMusac+'/1.jpg', pathMusac+'/2.jpg', pathMusac+'/3.jpg', pathMusac+'/4.jpg', pathMusac+'/5.jpg', pathMusac+'/6.jpg', pathMusac+'/7.jpg'],
    historia: '<p>El Museo de la Universidad de San Carlos, es una unidad de servicio de la Dirección General de Extensión de la Universidad de San Carlos de Guatemala, creado por el Consejo Superior Universitario en 1981, designándose para su funcionamiento el Antiguo Edificio Universitario, declarado Monumento Nacional en 1970, por su valor histórico y estético, conocido como Antigua Facultad de Derecho, ubicado en el Centro Histórico de la ciudad.</p>'
    + '<p>Dicho edificio fue dañado severamente por los terremotos de 1917-18 y de 1976, la Universidad emprende su rescate de 1985 a 1989, y emprenden los estudios para el establecimiento del Museo Universitario, que se conoce desde entonces como MUSAC. Su funcionamiento da inicio el 22 de junio de 1994, como un Museo Académico, espacio abierto para el encuentro entre el pueblo, y las personas vinculadas al arte, ciencia, historia y cultura en general; así como medio difusor del quehacer de los universitarios, a través de exposiciones y actividades con sentido educativo, que capten el interés, con temas multidisciplinarios y de aporte a la superación de los visitantes.</p>'
    + '<p>Para su funcionamiento se planteó contar con una organización propia, conformada por su administración y las unidades afines a la labor de los museos, tiene  por funciones:   divulgar, conservar, investigar y exponer con independencia programática, a la vez se ha concebido como un trabajo multidisciplinario con personal especializado, incorporándose con ello al campo de la museología de los museos nacionales e internacionales.  </p>'
    + '<p>Dentro de las actividades relevantes,  se participa en el Comité Organizador del  Festival del Centro Histórico y del Festival de Museos; dentro del programa de actividades se ha establecido: el Domingo Musical para promover y exaltar el instrumento nacional, la Marimba, el último domingo de cada mes; la Semana Cultural de Aniversario en el mes de junio;  los Miércoles Culturales se ha implementado varios proyectos autofinanciables y un programa de voluntariado. Forma parte de las Asociaciones: de Conservadores de Archivos, Bibliotecas y Museos, de Museos de Guatemala que está consolidando la Red de Museos del País, Comité Guatemalteco del Consejo Internacional de Museos; ha realizado exposiciones con embajadas como la de México, Israel, Francia y Japón.</p>'
    + '<p>El inmueble del Museo se enmarca dentro del complejo de museos de la zona 13 de la ciudad de Guatemala. Este complejo fue construido durante el gobierno del General Jorge Ubico (1930-1944). Se creó como un Complejo Cultural donde se celebró hasta 1944, la Feria Nacional de Noviembre. Fue declarado como patrimonio cultural en agosto de 1998.</p>'
    + '<p>El Museo Nacional de Arqueología y Etnología posee una valiosa colección de objetos arqueológicos extraídos por excavaciones de arqueólogos en la tierra guatemalteca, coordinadas por el Instituto Nacional de Antropología e Historia. Contiene, además colecciones de  objetos etnológicos e indumentaria de uso ceremonial y cotidiano de la época colonial y contemporánea.</p>'
    + '<p>Las colecciones distinguidas se integran en cerámica, piedra, concha, hueso y jade, prehispánicos y tela. Además se complementa la colección con objetos artesanales, pictóricos y fotografías.</p>'
  }, {
    id: 5,
    nombre: 'Museo Numismático',
    tipoMuseo: 2,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo Numismático<br />7a. Av. 22-01, zona 1, Guatemala, C.A.<br/>Telefono: <br/>PBX (502) 2429 6000<br/>(502) 2485 6000<br/>(502) 2390 6000 <br/>Fax: <br/>(502) 2429 6086<br/>(502) 2485 6041<br/><a href="http://www.banguat.gob.gt/museo/index.htm">http://www.banguat.gob.gt/museo/index.htm</a></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Lunes a viernes de 9:00 a 17:00 hrs.</p></div>'
    +'<div class="item item-divider"><strong>Tarifas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Entrada Gratuita</p></div>'
    +'</div>',
    imagen: 'img/museos/numismatico/0.jpg',
    imagenes: [pathNumismatico+'/0.jpg', pathNumismatico+'/1.jpg', pathNumismatico+'/2.jpg', pathNumismatico+'/3.jpg', pathNumismatico+'/4.jpg', pathNumismatico+'/5.jpg', pathNumismatico+'/6.jpg', pathNumismatico+'/7.jpg', pathNumismatico+'/8.jpg', pathNumismatico+'/9.jpg', pathNumismatico+'/10.jpg', pathNumismatico+'/11.jpg', pathNumismatico+'/12.jpg'],
    historia: '<p>En 1733 surge la primera moneda acuñada en Guatemala. Habrían de transcurrir 141 años para que la población del país conociera el primer billete emitido localmente. </p>'
    + '<p>El término <strong>numismática</stong> deriva del latín numisma que significa moneda; es un vocablo que designa el estudio y coleccionismo de monedas, así como papel moneda emitido por el Estado con el diseño oficial del país. De igual manera la disciplina numismática se interesa en instrumentos utilizados para acuñación de monedas o impresión de billetes.</p>'
    + '<p>Las piezas monetarias incorporan un valor nominal inmerso en un destacado mérito artístico e histórico. Su estudio conlleva aprender sobre las distintas épocas del país emisor, los acontecimientos más importantes y trascendentales son indicativos del contexto económico-financiero, el comercio, las costumbres, las religiones, la historia política y el arte a lo largo de las diferentes generaciones humanas.</p>'
    + '<p>El Banco de Guatemala espera contribuir a la preservación y difusión de la cultura nacional con la puesta en funcionamiento de este museo. </p>'
  }, {
    id: 6,
    nombre: 'Museo de los Niños',
    tipoMuseo: 3,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo de los Niños<br />5ta. Calle 10-00 zona 13<br/>Ciudad de Guatemala<br/>Telefono: <br/>(502) 2475-5076 al 9<br/>reservacionesescolares@museodelosninos.com.gt<br/><a href="www.museodelosninos.com.gt">www.museodelosninos.com.gt</a></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Martes a viernes<br/>8:30-12:00<br/>13:00-16:30<br/>Sábados y Domingos<br/>9:30-13:30<br/>14:30-18:00</p></div>'
    +'<div class="item item-divider"><strong>Tarifas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Tarifa Regular: Q40.00 (tarifa única a partir de 2 años)</p></div>'
    +'<div class="item item-divider"><strong>Tarifas Familiares</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>De Martes a Viernes por la tarde, fines de semana y días festivos Pasaportes Familiares:<br/>1 boleto X Q 40.00<br/>2 boletos X Q 65.00<br/>3 boletos X Q 90.00<br/>4 boletos X Q 110.00<br/>5 boletos X Q 130.00, boleto adicional a los 5 Q 30.00</p></div>'
    +'<div class="item item-divider"><strong>Parqueo</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Q10.00 Precio de Parqueo para visitante</p></div>'
    +'</div>',
    imagen: 'img/museos/de_los_ninos/0.jpg',
    imagenes: [pathNinos+'/0.jpg', pathNinos+'/1.jpg', pathNinos+'/2.jpg', pathNinos+'/3.jpg', pathNinos+'/4.jpg'],
    historia: '<p>El <strong>Museo de los Niños de Guatemala</strong> abrió sus puertas en febrero del año 2000, nació como una iniciativa de apoyo a la educación de la niñez Guatemalteca.</p>'
  }, {
    id: 7,
    nombre: 'Museo Arquidiocesano de Santiago de Guatemala',
    tipoMuseo: 4,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo Arquidiocesano de Santiago de Guatemala<br />7ma. Avenida y 8 Calle zona 1<br/>Ciudad de Guatemala<br/>Telefono: <br/>(502) 2504 6868<br/></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Martes a Sábado<br/>9:00-17:00</p></div>'
    +'</div>',
    imagen: 'img/museos/arquidiocesano/0.jpg',
    imagenes: [pathArqui+'/0.jpg', pathArqui+'/1.jpg', pathArqui+'/2.jpg', pathArqui+'/3.jpg', pathArqui+'/4.jpg', pathArqui+'/5.jpg', pathArqui+'/6.jpg', pathArqui+'/7.jpg'],
    historia: '<p>Por iniciativa de su Eminencia Monseñor Rodolfo Cardenal Quezada Toruño, con la colaboración de Doña Ana María de Quezada, y el patrocinio de Banco Industrial, a raíz de su nombramiento como nuevo Arzobispo de Santiago de Guatemala, y posteriormente como Cardenal de la Iglesia Católica Universal, se piensa en dar a conocer al pueblo católico todas las obras de arte religioso existentes en la Arquidiócesis.</p>'
    + '<p>Se inauguró el 4 de febrero de 2005, y contiene piezas de arte sacro de los siglos XVI,XVII, XVIII, XIX y XX, en su colección se exhiben piezas de pintura, Imaginería, Textiles, Orfebrería, Platería y representaciones de altares característicos de la religión católica, se encuentra ubicado en el antiguo Colegio San José de los Infantes a un lado de la Catedral Metropolitana, Inmueble Colonial de la Nueva Guatemala de la Asunción, Cuenta con cinco salas, una del Colegio de Infantes, otra de Jesús, Otra de la Iglesia, Otra de la Virgen María y una más de exposiciones temporales, representa un ejemplo de servicio y difusión del Patrimonio Sacro de la Iglesia así como un compromiso de la Institución al servicio de la sociedad.</p>'
    + '<p>El arte católico nos habla de Dios y nos transmite esperanza. Conozca y admire las hermosas expresiones y manifestaciones de fe, plasmadas en arte.</p>'
  }, {
    id: 8,
    nombre: 'Museo Jardín Botánico USAC',
    tipoMuseo: 5,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo Jardín Botánico USAC<br />Avenida La Reforma 0-63, zona 10<br/>Ciudad de Guatemala<br/>Telefono: <br/>(502) 2331 0904<br/>jardinbotanico@usac.edu.gt<br/><a href="http://sitios.usac.edu.gt/jardinbotanico/">http://sitios.usac.edu.gt/jardinbotanico/</a></p></div>'
    +'</div>',
    imagen: 'img/museos/jardin_botanico/0.jpg',
    imagenes: [pathJardin+'/0.jpg', pathJardin+'/1.jpg', pathJardin+'/2.jpg', pathJardin+'/3.jpg', pathJardin+'/4.jpg', pathJardin+'/5.jpg', pathJardin+'/6.jpg', pathJardin+'/7.jpg'],
    historia: '<p>El <strong>Jardín Botánico</strong> fue fundado oficialmente el 27 de diciembre de 1922 por iniciativa de la entonces <strong>Facultad de Ciencias Naturales y Farmacina</strong> (folio 253 de Junta Directiva, 19 de agosto de 1922), y declarado <strong>Patrimonio Natural y Cultural de la Nación</strong> por decreto legislativo 26-97.</p>'
    + '<p>Es un orgullo para el pais ya que, aparte de estar al servicio de la educación en beneficio de la Madre Naturaleza, también es el primer Jardín Botánico en Centro América.</p>'
    + '<p>El Jardín Botánico, unidad del CECON, es identificable por los organismos universitarios, Jardines Botánicos e instituciones afines en el extranjero y otras instituciones nacionales e internacionales que trabajan en la investigación, conservación y educación, porque está inmerso dentro de las grandes líneas mundiales de acción sobre conservación y el manejo adecuado de sus colecciones botánicas.</p>'
  }, {
    id: 9,
    nombre: 'Museo Casa MIMA',
    tipoMuseo: 6,
    informacion: '<div class="list card"><div class="item item-divider"><strong>Información</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Museo Casa MIMA<br />8a Avenida 14-12  Zona 1 Centro Historico<br/>Ciudad de Guatemala<br/>Telefono: <br/>Museo<br/>(502) 2253-4020<br/>Oficina<br/>2253-6657 y 2232-6902<br/><a href="http://www.casamima.org/">http://www.casamima.org/</a></p></div>'
    +'<div class="item item-divider"><strong>Horario</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Lunes a Sábado<br/>10:00 a 17:00</p></div>'
    +'<div class="item item-divider"><strong>Tarifas</strong></div>'
    +'<div class="item item-body body-tumblr gray"><p>Q.20 General<br/>Q.15 Niños menores de 12 años<br/>Q.15 Estudiantes con carnet<br/>Q.15 Adultos mayores de 65 con DPI</p></div>'
    +'<div class="item item-body body-tumblr gray"><p>Se atienden grupos escolares de primaria.<br/>Se solicita que los maestros se pongan en contacto con la oficina para obtener información sobre el programa educativo.</p></div>'
    +'<div class="item item-body body-tumblr gray"><p>También se atiende a grupos de alumnos de secundaria, así como a universitarios.<br/>Se ofrece visitas técnicas a universitarios.</p></div>'
    +'</div>',
    imagen: 'img/museos/mima/0.jpg',
    imagenes: [pathMima+'/0.jpg', pathMima+'/1.jpg', pathMima+'/2.jpg', pathMima+'/3.jpg', pathMima+'/4.jpg', pathMima+'/5.jpg', pathMima+'/6.jpg'],
    historia: '<p>Casa MIMA es una Casa Museo en el Centro Histórico de la Ciudad de Guatamala.  Alberga una colección doméstica que incluye los muebles de época, las artes decorativas y los utensilios de la vida cotidiana que datan de finales del siglo XIX a mediados del siglo XX.</p>'
    + '<p>Es una residencia de finales de 1800, donde habitó la familia Escobar Vega. Guarda un magnifico ejemplo de ambientaciones de la época republicana y sus artes decorativas.</p>'
    + '<p>La combinación de estilos e influencias de distintas nacionalidades reflejan el modo de vida de este período, así como la identidad del capitalino de la Guatemala independiente. </p>'
    + '<p>El inmueble fue construido en 1870 en la esquina de las antiguas calles del Carmen y las Beatas, en el corazón de lo que hoy es conocido como el Centro Histórico de la Ciudad de Guatemala.</p>'
    + '<p>En la década de 1920, la casa tuvo ciertas adaptaciones que estuvieron a cargo del Arquitecto Rafael Pérez de Léon. </p>'
    + '<p>La Fundación Cultural La Luz fue creada para administrar las finanzas del museo.  Recibe donaciones de artículos de época para su conservación, así como donaciones económicas.</p>'
    + '<p>Casa MIMA también mantiene un programa de exposiciones temporales temáticas. </p>'
  }];

  return {
    all: function() {
      return museos;
    }
    , remove: function(museo) {
      museos.splice(museos.indexOf(museo), 1);
    }
    , get: function(museoId) {
      for (var i = 0; i < museos.length; i++) {
        if (museos[i].id === parseInt(museoId)) {
          return museos[i];
        }
      }
      return null;
    }
    , getTipo: function(tipoId) {
      for (var i = 0; i < tipoMuseos.length; i++) {
        if (tipoMuseos[i].id === parseInt(tipoId)) {
          return tipoMuseos[i];
        }
      }
      return null;
    }
    , getComentarios: function() {
      var deferred=$q.defer();
      var comentariosMuseo = [];
      setTimeout(function() {
        var tmp = httpServices.getComentarios();
        tmp.then(function(data){
          var comentarios = JSON.parse(JSON.stringify(data));
          for(var i = 0; i < comentarios.length; i++){
            var fechaFormato = new Date(comentarios[i].fecha);
              //fechaFormato=fechaFormato.toLocaleTimeString("es-gt", options);
              var comentario={
                id : comentarios[i]._id,
                idMuseo : comentarios[i].museo,
                fecha : fechaFormato,
                calificacion : comentarios[i].calificacion,
                comentario : comentarios[i].comentario
              }
              sqliteServices.addComentario(comentario);
          }//for
        });
        deferred.resolve(comentariosMuseo);
      }, 3000);
      return deferred.promise;
    }
    , addComentario: function(idMuseo, rating, texto){
      var deferred=$q.defer();
      var comentario = {
        museo:idMuseo,
        calificacion: rating,
        comentario: texto
      };
      setTimeout(function() {
        httpServices.addComentario(comentario);
      }, 3000);
      deferred.resolve(1);
      return deferred.promise;
    }
    , getEventos: function() {
      var deferred=$q.defer();
      var eventosMuseos = [];
      setTimeout(function() {
        httpServices.getEventos()
        .then(function(data){
          var eventos = JSON.parse(JSON.stringify(data));
          console.log("eventos.length "+eventos.length);
          for(var i = 0; i < eventos.length; i++){
              var fechaFormato = new Date(eventos[i].fecha);
              var evento={
                id : eventos[i]._id,
                idMuseo : eventos[i].museo,
                nombre : eventos[i].nombre,
                imagen : imagenEvento,
                fecha : fechaFormato,
                descripcion : eventos[i].descripcion
              }
              sqliteServices.addEvento(evento);
          }//for
        });
        deferred.resolve(eventosMuseos);
      }, 3000);
      return deferred.promise;
    }
    , getComentariosBDD: function(idMuseo) {
      var deferred=$q.defer();
      var comentariosMuseo = [];
      setTimeout(function() {
        var tmp = sqliteServices.getComentarios(idMuseo);
        tmp.then(function(data){
          comentariosMuseo = data;
          deferred.resolve(comentariosMuseo);
        });
      }, 3000);
      return deferred.promise;
    }
    , getEventosMuseosBDD: function() {
      var deferred=$q.defer();
      var eventosMuseo = [];
      setTimeout(function() {
        sqliteServices.getEventosMuseos()
        .then(function(data){
          eventosMuseo = data;
          deferred.resolve(eventosMuseo);
        });
      }, 3000);
      return deferred.promise;
    }
    , getEventosMuseoBDD: function(idMuseo) {
      var deferred=$q.defer();
      var eventosMuseos = [];
      setTimeout(function() {
        sqliteServices.getEventosMuseo(idMuseo)
        .then(function(data){
          eventosMuseo = data;
          deferred.resolve(eventosMuseos);
        });
      }, 3000);
      return deferred.promise;
    }
  };
});
