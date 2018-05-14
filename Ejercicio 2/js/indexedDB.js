/* window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    window.alert("Tu navegador no soporta indexedDB.");
}

var request = window.indexedDB.open("MyTestDatabase", 3);

request.onerror = function (event) {};
request.onsuccess = function (event) {};

var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function (event) {
    alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function (event) {
    db = request.result;
};

db.onerror = function (event) {
    alert("Database error: " + event.target.errorCode);
};

request.onupgradeneeded = function(event) { 
  var db = event.target.result;

  // Crea un almacén de objetos (objectStore) para esta base de datos
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
*/




var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function startDB(){
    var database=indexedDB.open("object", 1);
    database.onupgradeneeded=function(e){
        alert("hola");
    };
}




request.onsuccess=function(event){
    db.request.result;
}





