// Ionic sqliteServices futrocks
// Servicio que manejara todas las funciones CRUD de la BDD local
angular.module('MusaGT.sqliteServices', [])
/**
*Servicio encargado de manejar la conexion insercion hacia la base de datos interna.
*@$cordovaSQLite encargado de manejar las conexiones hacia la base de datos e interaccion con el dbms
*@$q algunas llamadas a get deben de ser llamadas como promesas por la sincronidad que se necesita en algunas partes del
*@otherServices para hacer llamadas al mismo y limpiar arreglos durante el proceso de seleccion de participantes
*/
.service("sqliteServices", function($cordovaSQLite,$q) {
  // funcion que verifica si una cadena esta vacía o nula
  function isEmpty(cadena){
    return (!cadena || 0 === cadena.length);
  };

  return {
    startDatabase: function(){
      var defferred=$q.defer();
    //Abrimos db
    //db = $cordovaSQLite.openDB( {name:"futrocks.db" });
    //developer Mode
    db = window.openDatabase("musagt.db", "1.0", "musagt", 200000);
    //para limpiar la base de datos botamos la table y se borra todo
    //$cordovaSQLite.execute(db,"DROP TABLE Event");
    //Creamos db en SQLite si no existe
    //Tabla Amigo
    //$cordovaSQLite.execute(db,"DROP TABLE Participant");

    $cordovaSQLite.execute(db,
      "CREATE TABLE IF NOT EXISTS Museo ("
      + "museo integer primary key"
      + ", nombre text"
      + ", tipoMuseo integer"
      + ", informacion text"
      + ", historia text"
      + ", imagen text"
      + ", imagenes text"
      + ", horario text"
      + ", latitud text"
      + ", longitud text"
      + ")");

      $cordovaSQLite.execute(db,
      "CREATE TABLE IF NOT EXISTS Evento ("
      + "evento text primary key"
      + ", nombre text"
      + ", museo integer"
      + ", imagen text"
      + ", descripcion text"
      + ", fecha text"
      + ")");

    $cordovaSQLite.execute(db,
      "CREATE TABLE IF NOT EXISTS Comentario ("
    + "comentario text primary key"
    +", museo integer"
    +", fecha text"
    +", calificacion integer"
    +", texto text"
    +")");

      console.log("Finalizo de abrir y crear la bd");
        defferred.resolve(true);
      return defferred.promise;
    },
    /*
    *Inserta un comentario en la BDD
    *comentario, museo, fecha, calificacion, texto
    */
    addComentario : function (comentario){
      var query = "INSERT OR REPLACE INTO Comentario (comentario, museo, fecha, calificacion, texto) "
      +" VALUES (?,?,?,?,?)";
      $cordovaSQLite.execute(db, query, [comentario.id, comentario.idMuseo, comentario.fecha, comentario.calificacion,
        comentario.comentario]).then(function(res) {
          console.log("Comentario creado -> " + comentario.id);
          return 1;
        }, function (err) {
          console.error("addComentario - sqliteServices: "+err);
          return 0;
        });
      } ,//addComentario
      // Obtener comentarios
      getComentarios : function (idMuseo){
        var defferred=$q.defer();
        var resultado=[];
        var query = "SELECT comentario as id, museo, fecha, calificacion, texto FROM Comentario WHERE museo = ? ORDER BY fecha desc";
        console.log(query);
        return $cordovaSQLite.execute(db, query,[idMuseo]).then(function(res) {
          for(i=0; i<res.rows.length; i++){
              var row=res.rows.item(i);
              var comentario={
                id: row.id,
                museo: row.museo,
                fecha: row.fecha,
                calificacion: row.calificacion,
                comentario: row.texto
              }
              resultado.push(comentario);
            }
          defferred.resolve(resultado);
          return defferred.promise;
        }, function (err) {
          console.log(err.message);
          return defferred.promise;
        });
      },//getComentarios
      /*
      *Inserta un evento en la BDD
      *evento, museo, imagen, descripcion, fecha
      */
      addEvento : function (evento){
        var query = "INSERT OR REPLACE INTO Evento (evento, nombre, museo, imagen, descripcion, fecha) "
        +" VALUES (?,?,?,?,?,?)";
        $cordovaSQLite.execute(db, query, [evento.id, evento.nombre, evento.idMuseo, evento.imagen, evento.descripcion, evento.fecha]).then(function(res) {
            console.log("Evento creado -> " + comentario.id);
            return 1;
          }, function (err) {
            console.error("addEvento - sqliteServices: "+err.message);
            return 0;
          });
        } ,//addEvento
        // Obtener eventos
        getEventosMuseos : function (){
          var defferred=$q.defer();
          var resultado=[];
          var query = "SELECT evento, nombre, museo, imagen, descripcion, fecha FROM Evento order by fecha desc";
          return $cordovaSQLite.execute(db, query,[]).then(function(res) {
            for(i=0; i<res.rows.length; i++){
                var row=res.rows.item(i);
                var evento={
                  id: row.evento,
                  idMuseo: row.museo,
                  imagen: row.imagen,
                  fecha: row.fecha,
                  descripcion: row.descripcion,
                  nombre: row.nombre
                };
                resultado.push(evento);
              }
            defferred.resolve(resultado);
            return defferred.promise;
          }, function (err) {
            console.log(err.message);
            return defferred.promise;
          });
        },//getEventosMuseos
        // Obtener eventos por museo
        getEventosMuseo : function (idMuseo){
          var defferred=$q.defer();
          var resultado=[];
          var query = "SELECT evento, nombre, museo, imagen, descripcion, fecha FROM Evento WHERE museo = ? order by fecha desc ";
          console.log(query);
          return $cordovaSQLite.execute(db, query,[idMuseo]).then(function(res) {
            for(i=0; i<res.rows.length; i++){
                var row=res.rows.item(i);
                var evento={
                  id: row.evento,
                  idMuseo: row.museo,
                  imagen: row.imagen,
                  fecha: row.fecha,
                  descripcion: row.descripcion,
                  nombre: row.nombre
                };
                resultado.push(evento);
              }
            defferred.resolve(resultado);
            return defferred.promise;
          }, function (err) {
            console.log(err.message);
            return defferred.promise;
          });
        },//getEventos
    } //return
  })//DBService
  ;
