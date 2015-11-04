angular.module('MusaGT.httpServices', [])

.factory('httpServices', function($http, $q, $state,$window) {

  var ruta = "https://musagt-troyanrex.rhcloud.com";


  return {
    /*
      Funcion que envia un nuevo comentario y espera respuesta de exito o fallo
    */
    addComentario:function(data){
      var deferred=$q.defer();
      console.log("enviando comentario");
      $http({
        url: ruta+ '/comentarios/crear',
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        data: {
          comentario:data.comentario
          ,calificacion:data.calificacion
          ,museo:data.museo}
      }).success(function (response,status, headers,config) {
        if(response.token){

          deferred.resolve(response.data);
        }else{
          console.error('Error creando comentario');
          console.log(JSON.stringify(response));
        }
      }).error( function (response) {
          console.error('Error addComentario: '+response);
          deferred.reject(response);
      });
      return deferred.promise;
    },
    /*
    Se obtienen todos los comentarios
    */
    getComentarios:function(){
      var deferred=$q.defer();
      $http({
        method  : 'GET',
        url     :  ruta + '/comentarios',
        data    :
                {

                },
        headers :
                {
                  'Content-Type': 'application/json',
                }
      }).success(
        function(response){
          deferred.resolve(response);
        }
      ).error(
        function(response){
          console.log("getComentarios: "+JSON.stringify(response));
          deferred.reject(response);
          }
      );
      return deferred.promise;
    },
    /*
    Se obtienen todos los eventos
    */
    getEventos:function(){
      var deferred=$q.defer();
      $http({
        method  : 'GET',
        url     :  ruta + '/eventos',
        data    :
                {

                },
        headers :
                {
                  'Content-Type': 'application/json',
                }
      }).success(
        function(response){
          deferred.resolve(response);
        }
      ).error(
        function(response){
          console.log("getEventos: "+JSON.stringify(response));
          deferred.reject(response);
          }
      );
      return deferred.promise;
    },
    /*
    Se obtienen eventos para un museo
    */
    getEventosMuseo:function(idMuseo){
      var deferred=$q.defer();
      $http({
        method  : 'POST',
        url     :  ruta + '/eventos/museo',
        data    :
                {
                  museo: idMuseo
                },
        headers :
                {
                  'Content-Type': 'application/json',
                }
      }).success(
        function(response){
          deferred.resolve(response);
        }
      ).error(
        function(response){
          console.log("getEventosMuseo: "+JSON.stringify(response));
          deferred.reject(response);
          }
      );
      return deferred.promise;
    },
  }
});
