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
      "CREATE TABLE IF NOT EXISTS Evento ("
      + "evento text primary key"
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
      var query = "INSERT INTO Comentario (comentario, museo, fecha, calificacion, texto) "
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
        var query = "SELECT comentario as id, museo, fecha, calificacion, texto FROM Comentario order by fecha desc WHERE museo = ?";
        var tmpdate=null;
        return $cordovaSQLite.execute(db, query,[idMuseo]).then(function(res) {
          if(res.rows.length > 0) {
            resultado.push(row);

          }else{
            console.log("No results");
          }
          defferred.resolve(resultado);
          return defferred.promise;
        }, function (err) {
          createLog(err.message,"getEvents - sqliteServices");
          console.log(err);
          return defferred.promise;
        });
      },//getComentarios
      /*
      *Actualizar un amigo en la BDD, si no existe lo inserta
      *friend
      *nickname, name, avatar, noArea, phone, shirt, fav_position, totalRocks, shoot, dodge, technic, speed, resistance
      */
      updateFriend : function (friend){
        var query = "INSERT INTO Friend (nickname, name, avatar, noArea, phone, shirt, fav_position, totalRocks, shoot, dodge, technic, speed, resistance) "
        +" VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $cordovaSQLite.execute(db, query, [friend.nickname, friend.name, friend.avatar, friend.noArea,
          friend.phone, friend.shirt, friend.fav_position, friend.totalRocks, friend.shoot, friend.dodge,
          friend.technic, friend.speed, friend.resistance]).then(function(res) {
            console.log("Usuario creado -> " + friend.nickname);
            return 1;
          }, function (err) {
            createLog(err.message,"createFriend - sqliteServices");
            console.error(err);
            return 0;
          });
        } ,//updateFriend

      /**Obtiene un evento en especifico
      *@id envia el id del evento en integer
      *@dateType  1 si el tipo de fecha es en cadena o 2 si el tipo de fecha es en epoch time.
      */
      getSingleEvent : function (id,dateType){
        var defferred=$q.defer();
        var resultado=[];
        var query = "SELECT event as id, name, place, date, time, isAdmin, noParticipants  FROM Event where event=?";
        var tmpdate=null;
        return $cordovaSQLite.execute(db, query,[id]).then(function(res) {
          if(res.rows.length > 0) {
            //console.log("esta es salida "+res.rows.length);res.rows.item(i).
            //for(i=0; i<res.rows.length; i++){
              //console.log("SELECTED -> " + JSON.stringify(res.rows.item(i)));
              var tmpname;
              if(dateType==1){//devolvemos la fecha coomo cadena formateada
                tmpdate="";
                tmpdate=new Date(parseInt(res.rows.item(0).date));//convertimos la fecha en un formato maleable
               tmpdate= tmpdate.toLocaleDateString("es-ES");
              }else if(dateType==2){//devolvemos el epochTime
                tmpdate=res.rows.item(0).date;
              }

              // console.log("fecha seleccionada "+tmpdate.toDateString());
              if(res.rows.item(0).name=="" || res.rows.item(0).name=="undefined"){
                tmpname="Chamusca de FutRocks " +i;
              }else{
                tmpname=res.rows.item(0).name;
              }
              //console.log("Dato Seleccionado "+ row.id+" "+ " , "+row.name+ " , "+row.date+" , "+row.place+" , "+row.date+ " ,.. "+ row.time+ ", ...xa **"+row.newdate);
              //mandamos el resultado como un arreglo
              resultado.push({
                id: res.rows.item(0).id,
                name: tmpname,
                place: res.rows.item(0).place,
                epochdate:res.rows.item(0).date,
                date: tmpdate,
                time:res.rows.item(0).time,
                isAdmin:res.rows.item(0).isAdmin
              })
              //resultado.push(res.rows.item(i));
            //}
          }else{
            console.log("NO results");
          }
          defferred.resolve(resultado[0]);
          return defferred.promise;
        }, function (err) {
          createLog(err.message,"getSingleEvent - sqliteServices");
          console.error(JSON.stringify(err));
          return defferred.promise;
        });
      },//getSingleEvent
      // Obtener eventos
      getEvents : function (){
        var defferred=$q.defer();
        var resultado=[];
        var query = "SELECT event as id, name, place, date, time, (date+time) as newdate, noParticipants FROM Event order by newdate asc";
        var tmpdate=null;
        return $cordovaSQLite.execute(db, query,[]).then(function(res) {
          if(res.rows.length > 0) {
            //console.log("esta es salida "+res.rows.length);row.
            for(i=0; i<res.rows.length; i++){
              var row=res.rows.item(i);
              //             console.log("SELECTED -> " + JSON.stringify(row));
              var tmpname="";
              tmpdate=new Date(parseInt(row.date));//convertimos la fecha en un formato maleable
              // console.log("fecha seleccionada "+tmpdate.toDateString());
              if(row.name=="" || row.name=="undefined")
              {
                tmpname="Chamusca de FutRocks " +i;
              }else{
                tmpname=row.name;
              }
              //console.log("Dato Seleccionado "+ row.id+" "+ " , "+row.name+ " , "+row.date+" , "+row.place+" , "+row.date+ " ,.. "+ row.time+ ", ...xa **"+row.newdate);
              resultado.push({
                id: row.id,
                name: tmpname,
                place: row.place,
                date: tmpdate.toLocaleDateString("es-ES"),
                time:row.time,
                noParticipants: row.noParticipants
              })
              //resultado.push(row);
            }
            //console.log("La salida del sql es" +JSON.stringify(res));
          }else{
            console.log("NO results");
          }
          //console.log("en...333");
          defferred.resolve(resultado);
          return defferred.promise;
        }, function (err) {
          createLog(err.message,"getEvents - sqliteServices");
          console.log(err);
          return defferred.promise;
        });
      },//getEvents
      /**
      @id es el id del evento*/
      getParticipantsbyFriend: function(id){
        var defferred=$q.defer();
        var resultado=[];
        console.log("el id del evento es"+id);
        var query = "SELECT Pa.event as id, Pa.friend as friend, Pa.confirm as confirm, "
        +"Fr.nickname as nickname, Fr.name as name, Fr.phone as phone, Fr.shirt as avatar FROM Participant as Pa "
        +"JOIN Friend as Fr "
        +"ON Pa.friend=Fr.friend "
        +"where Pa.event=?";
        var tmpdate=null;
        return $cordovaSQLite.execute(db, query,[id]).then(function(res) {
          if(res.rows.length > 0) {
            console.log("esta es salida "+res.rows.length);
            //row.
            for(i=0; i<res.rows.length; i++){
              row=res.rows.item(i);
              var tmpname="";
              //mandamos el resultado como un arreglo
              var tmpavatar=constantsServices.getAvatar(row.avatar);
              resultado.push({
                id: id,
                friend: row.friend,
                confirm: row.confirm,
                nickname: row.nickname,
                name: row.name,
                phone: row.phone,
                avatar: tmpavatar,
              })
              //resultado.push(row);
            }
          }else{
            console.log("NO results");
          }
          defferred.resolve(resultado);
          return defferred.promise;
        }, function (err) {
          createLog(err.message,"getParticipantsbyFriend - sqliteServices");
          console.error(JSON.stringify(err));
          return defferred.promise;
        });
      } //getEvents
      /*
      *Devolvemos el amigo con el id en BDD
      */
      , getFriendByID: function(id) {
        var objFriend = null;
        var select = "SELECT nickname, name, avatar, noArea, phone, shirt, fav_position, totalRocks, shoot, dodge, technic, speed, resistance "
        var tablas =  " FROM Friend ";
        var where = " WHERE friend = ? ";
        var query = select + tablas + where;
        console.log("getFriend query: "+query);
        $cordovaSQLite.execute(db, query, [id]).then(function(res) {
          if(res.rows.length > 0) {
            objFriend = res.rows;
            console.log("SELECTED getFriend-> " + res.rows.length);
          } else {
            console.log("No se encontro ningun amigo registrado");
          }
        }, function (err) {
          createLog(err.message,"getFriendByID - sqliteServices");
          console.error("Error SQL: "+err.message);
        });
        return objFriend;
      } //getFriend
      /*
      *Devolvemos el amigo con el noArea y Phone en BDD
      */
      , getFriend: function(phone) {
        var defferred=$q.defer();
        var objFriend = [];
        var select = "SELECT nickname, name, avatar, noArea, phone, shirt, fav_position, totalRocks, shoot, dodge, technic, speed, resistance "
        var tablas = " FROM Friend ";
        var where = " WHERE phone = ? ";
        var query = select + tablas + where;
        console.log("getFriend query: " + query);
        return $cordovaSQLite.execute(db, query, [phone]).then(function(res) {
          if (res.rows.length > 0) {
            var tmpavatar=constantsServices.getAvatar(res.rows.item(0).shirt);
            objFriend = {
              id            : res.rows.item(0).id,
              nickname      : res.rows.item(0).nickname,
              name          : res.rows.item(0).name,
              avatar        : tmpavatar,
              noArea        : res.rows.item(0).noArea,
              shirt         : res.rows.item(0).shirt,
              fav_position  : res.rows.item(0).fav_position,
              phone         : res.rows.item(0).phone,
              totalRocks    : res.rows.item(0).totalRocks,
              shoot         : res.rows.item(0).shoot,
              dodge         : res.rows.item(0).dodge,
              technic       : res.rows.item(0).technic,
              speed         : res.rows.item(0).speed,
              resistance    : res.rows.item(0).resistance
            };
            defferred.resolve(objFriend);
            return defferred.promise;
          } else {
            console.log("No se encontro ningun amigo registrado");
            defferred.resolve(null);
            return defferred.promise;
          }
        }, function(err) {
          createLog(err.message,"getFriend - sqliteServices");
          console.error("Error SQL: " + err.message);
        });
        return objFriend;
      } //getFriend
      /*
      *Devolvemos todos los amigos existentes en BDD
      *@listId es el listado que no queremos incluir en la query
      */
      , getFriends : function (listId){
        var defferred=$q.defer();
        var objFriend = [];
        var select = "SELECT friend as id, nickname, name, avatar, noArea, phone, shirt, fav_position, totalRocks, shoot, dodge, technic, speed, resistance "
        var tablas =  " FROM Friend ";
        var query = select + tablas;
        if(listId!=null)
        query+= "WHERE friend NOT IN ("+listId+")";

        console.log("Esto es una query "+query);

        return $cordovaSQLite.execute(db, query, []).then(function(res) {
          if(res.rows.length > 0) {
            for(i=0; i<res.rows.length; i++){noParticipants
              var row=res.rows.item(i);
              var tmpavatar=constantsServices.getAvatar(row.shirt);
              objFriend.push({
                id            : res.rows.item(i).id,
                nickname      : res.rows.item(i).nickname,
                name          : res.rows.item(i).name,
                avatar        : tmpavatar,
                noArea        : res.rows.item(i).noArea,
                shirt         : res.rows.item(i).avatar,
                fav_position  : res.rows.item(i).fav_position,
                phone         : res.rows.item(i).phone,
                totalRocks    : res.rows.item(i).totalRocks,
                shoot         : res.rows.item(i).shoot,
                dodge         : res.rows.item(i).dodge,
                technic       : res.rows.item(i).technic,
                speed         : res.rows.item(i).speed,
                resistance    : res.rows.item(i).resistance
              });
            }//fin for
            defferred.resolve(objFriend);
            return defferred.promise;
          } else {
            console.log("No se encontro ningun amigo registrado");
            defferred.resolve(null);
            return defferred.promise;
          }
        }, function (err) {
          createLog(err.message,"getFriends - sqliteServices");
          console.error("Error SQL: "+err.message);
        });

      }, //getFriends
      updateSingleEvent:function(datos){
        /*
+"match integer primary key"
    +", date text"
    +", place text"
    +", time text"
    +", isAdmin integer"
    +", matchType integer"
    */
    console.log("EL AREGGGLO "+JSON.stringify(datos));
        var defferred=$q.defer();
        var objFriend = [];
        var query = "UPDATE Event SET name='"+datos[0].name+"', place='"+datos[0].place+"', time="+datos[0].time+", date='"+datos[0].date+"' where match="+datos[0].id;

        console.log("el query es "+query)  ;
        var array=[];

        return $cordovaSQLite.execute(db, query, []).then(function(res) {

            console.log(res);
            array.push({
              status:"ok"
            })
            defferred.resolve(array);
            return defferred.promise;

        }, function (err) {
          array.push({
              status:"bad"
            })

          console.error("Error SQL: "+err.message);
        });


            defferred.resolve(objFriend);
            return defferred.promise;

      },
      addParticipants:function(idEvent,participants){
        var defferred=$q.defer();

          var EventId=idEvent;
          query="INSERT INTO Participant (match, friend, confirm) ";
          //+" VALUES ";
          var rowArgs=[];
          var data=[];
          var x=0;
          angular.forEach(participants,function (val,index) {
            rowArgs.push("(?, ?, ?)");
            var tmpdatarow=[]    ;
            tmpdatarow.push(EventId);
            tmpdatarow.push(val);
            tmpdatarow.push(1);//Se inserta con status pendiente.
            if(x>0)
            query += "UNION SELECT "+EventId+", "+ val+", 1 ";
            else
            query += " SELECT "+EventId+", "+val+", 1 ";
            data.push(tmpdatarow);
            console.log("Este es un dato "+ val + " .... "+index);
            x++;
          });
          //query += rowArgs.join(", ");
          console.log("LA QUERY FINAL ES"+query );
          //vamos a la ejecucion de la query dondde se ingresan todos los participantes
        return $cordovaSQLite.execute(db, query, []).then(function(res) {
            console.log("Participantes -> " + res.insertId) ;
            console.log("testing "+res);
            defferred.resolve(1);
            return defferred.promise;
          }, function (err) {
            console.log(err);
            defferred.resolve(0);
            return defferred.promise;
          });

      },//fin the add participants
      deleteEvent: function(eventId){
          var defferred=$q.defer();


          var query ="DELETE FROM Participant where event=?";
          //"DELETE FROM Event WHERE match=?"
          return $cordovaSQLite.execute(db, query, [eventId]).then(function(res) {
            //console.log("Participantes -> " + res.insertId) ;

              query="DELETE FROM Event WHERE event=?";
              return $cordovaSQLite.execute(db, query, [eventId]).then(function(res) {

               defferred.resolve(1);
                return defferred.promise;
              }, function (err) {
                 console.log(err);
                defferred.resolve(0);
                return defferred.promise;
              });



            defferred.resolve(1);
            return defferred.promise;
          }, function (err) {
            console.log(err);
            defferred.resolve(0);
            return defferred.promise;
          });


      }
    } //return
  })//DBService
  ;
