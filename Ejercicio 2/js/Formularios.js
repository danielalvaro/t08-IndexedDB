loggeado = false;
moduloscreados = false;




function validado() {
    if (loggeado == false) {
        document.getElementById("modulos").style.display = "none";
    } else {
        document.getElementById("modulos").style.display = "flex";
    }
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(user) {
    user = getCookie("username");
    if (user != "") {
        alert("Bienvenido, " + user);
    } else {
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}





function acceso() {
    loggeado = false;
    var f = document.getElementById("form1");
    while (f.hasChildNodes()) f.removeChild(f.firstChild);
    var user = document.createElement("input");
    user.setAttribute("type", "text");
    user.setAttribute("placeholder", "Usuario");
    user.setAttribute("id", "campouser")
    var pass = document.createElement("input");
    pass.setAttribute("type", "password");
    pass.setAttribute("placeholder", "Contraseña");
    pass.setAttribute("id", "campopass");
    var boton = document.createElement("button");
    boton.setAttribute("id","bottonacceso");
    boton.textContent = "Acceder";

    f.appendChild(user);
    f.appendChild(pass);
    f.appendChild(boton);


    boton.addEventListener("click", validar);
    validado();
    initPopulate();
    checkCookie(user);
}









function validar() {
    var user = document.getElementById("campouser").value;
    var pass = document.getElementById("campopass").value;
    if (user == "prueba" && pass == "prueba") {
        loggeado = true;
        var f = document.getElementById("form1");
        while (f.hasChildNodes()) f.removeChild(f.firstChild);
        var saludo = document.createElement("h2");
        saludo.textContent = "Usuario loggeado:";
        var saludo2 = document.createElement("h2");
        saludo2.textContent = user;
        var cerrarsesion = document.createElement("button");
        cerrarsesion.addEventListener("click", acceso);
        cerrarsesion.textContent = "Cerrar sesión";

        f.appendChild(saludo);
        f.appendChild(saludo2);
        f.appendChild(cerrarsesion);

        modulos();
        validado();
    } else {
        alert("Usuario incorrecto.");
    }
}









function modulos() {
    if (moduloscreados == false) {
        var modulocat = document.getElementById("modulocat");
        var modulonav = document.getElementById("modulonav");
        var moduloprod = document.getElementById("moduloprod");
        var modulostock = document.getElementById("modulostock");

        var addcat = document.createElement("div");
        addcat.setAttribute("class", "editar");
        addcat.textContent = "Añadir categoría";
        addcat.setAttribute("onclick", "addcat()");
        addcat.setAttribute("style", "cursor:pointer");
        var removecat = document.createElement("div");
        removecat.setAttribute("class", "editar");
        removecat.textContent = "Borrar categoría";
        removecat.setAttribute("onclick", "removecat()");
        removecat.setAttribute("style", "cursor:pointer");
        var modifycat = document.createElement("div");
        modifycat.setAttribute("class", "editar");
        modifycat.textContent = "Modificar categoría";
        modifycat.setAttribute("onclick", "modifycat()");
        modifycat.setAttribute("style", "cursor:pointer");
        var addshop = document.createElement("div");
        addshop.setAttribute("class", "editar");
        addshop.textContent = "Añadir tienda";
        addshop.setAttribute("onclick", "addshop()");
        addshop.setAttribute("style", "cursor:pointer");
        var removeshop = document.createElement("div");
        removeshop.setAttribute("class", "editar");
        removeshop.textContent = "Borrar tienda";
        removeshop.setAttribute("onclick", "removeshop()");
        removeshop.setAttribute("style", "cursor:pointer");
        var modifyshop = document.createElement("div");
        modifyshop.setAttribute("class", "editar");
        modifyshop.textContent = "Modificar tienda";
        modifyshop.setAttribute("onclick", "modifyshop()");
        modifyshop.setAttribute("style", "cursor:pointer");
        var addprod = document.createElement("div");
        addprod.setAttribute("class", "editar");
        addprod.textContent = "Añadir producto";
        addprod.setAttribute("onclick", "addprod()");
        addprod.setAttribute("style", "cursor:pointer");
        var removeprod = document.createElement("div");
        removeprod.setAttribute("class", "editar");
        removeprod.textContent = "Borrar producto";
        removeprod.setAttribute("onclick", "removeprod()");
        removeprod.setAttribute("style", "cursor:pointer");
        var modifyprod = document.createElement("div");
        modifyprod.setAttribute("class", "editar");
        modifyprod.textContent = "Modificar producto";
        modifyprod.setAttribute("onclick", "modifyprod()");
        modifyprod.setAttribute("style", "cursor:pointer");
        var modifystock = document.createElement("div");
        modifystock.setAttribute("class", "editar");
        modifystock.textContent = "Modificar stock";
        modifystock.setAttribute("onclick", "modifystock()");
        modifystock.setAttribute("style", "cursor:pointer");

        modulocat.appendChild(addcat);
        modulocat.appendChild(removecat);
        modulocat.appendChild(modifycat);

        modulonav.appendChild(addshop);
        modulonav.appendChild(removeshop);
        modulonav.appendChild(modifyshop);

        moduloprod.appendChild(addprod);
        moduloprod.appendChild(removeprod);
        moduloprod.appendChild(modifyprod);

        modulostock.appendChild(modifystock);

        moduloscreados = true;
    }
    validado();
}








function addcat() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nueva categoría:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "inputcat");
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "addcat2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton);
    validado();
}

function addcat2() {
    var x = document.getElementById("inputcat").value;
    var x1 = new Category(x);
    almacen.addCategory(x1);

    var active = dataBase.result;
    var data = active.transaction(["categorias"], "readwrite")
    var object = data.objectStore("categorias");

    var request = object.put({
        title: x
    });

    request.onerror = function (e) {
        alert("Error de inserción de categoría.");
    }

    data.oncomplete = function (e) {
        alert("Se agregó correctamente el nuevo objeto a la base de datos.");
    }


    menuCategoryShopPopulate();
    validado();
    addcat();
}









function removecat() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Seleccionar categoría:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "selectcat");
    for (var i = 0; i < categorias.length; i++) {
        var option = document.createElement("option");
        option.textContent = categorias[i].title;
        input1.appendChild(option);
    }
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "removecat2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton);
    validado();
}

function removecat2() {
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    almacen.removeCategory(selected);


    var objectStore = db.transaction("categorias").objectStore("categorias");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected == cursor.value.title) {
                var request = db.transaction(["categorias"], "readwrite").objectStore("categorias").delete(num);
                request.onsuccess = function (event) {
                    alert("Se borró correctamente la categoría de la base de datos.");
                }

            }
            cursor.continue();
        }
    };









    menuCategoryShopPopulate();
    removecat();
    validado();
}









function modifycat() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var modif = document.createElement("p");
    modif.textContent = "Seleccionar categoría:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "selectcat");
    for (var i = 0; i < categorias.length; i++) {
        var option = document.createElement("option");
        option.textContent = categorias[i].title;
        input1.appendChild(option);
    }
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo nombre:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id", "inputcatnombre");
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "modifycat2()");

    d.appendChild(form);
    form.appendChild(modif);
    form.appendChild(input1);
    form.appendChild(nuevo);
    form.appendChild(input2);
    form.appendChild(boton);
    validado();
}

function modifycat2() {
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    var new1 = document.getElementById("inputcatnombre").value;
    for (var i = 0; i < categorias.length; i++) {
        if (categorias[i].title == selected) {
            categorias[i].title = new1;
        }
    }




    var objectStore = db.transaction("categorias").objectStore("categorias");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected == cursor.value.title) {
                var request = db.transaction(["categorias"], "readwrite").objectStore("categorias").delete(num);
                var active = dataBase.result;
                var data = active.transaction(["categorias"], "readwrite")
                var object = data.objectStore("categorias");

                var request = object.put({
                    title: new1,
                    id: cursor.key
                });
                request.onsuccess=function(){
                    alert("Modificación realizada correctamente.")
                }
            }
            cursor.continue();
        }
    };






    menuCategoryShopPopulate();
    modifycat();
    validado();
}









function addshop() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nueva tienda:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "inputcat");
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "addshop2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton);
    validado();
}

function addshop2() {
    var x = document.getElementById("inputcat").value;
    var x1 = new Shop(x);
    almacen.addShop(x1);
    
    
    
    
    var active = dataBase.result;
    var data = active.transaction(["tiendas"], "readwrite")
    var object = data.objectStore("tiendas");

    var request = object.put({
        name: x
    });

    request.onerror = function (e) {
        alert("Error de inserción de tiendas.");
    }

    data.oncomplete = function (e) {
        alert("Se agregó correctamente el nuevo objeto a la base de datos.");
    }
    
    
    
    
    
    shopsMenusPopulate();
    addshop();
    validado();
}









function removeshop() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Seleccionar tienda:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "selectcat");
    for (var i = 0; i < tiendas.length; i++) {
        var option = document.createElement("option");
        option.textContent = tiendas[i].name;
        input1.appendChild(option);
    }
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "removeshop2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input1);
    form.appendChild(boton);
    validado();
}

function removeshop2() {
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    almacen.removeShop(selected);
    
    
    
    
    
    
    var objectStore = db.transaction("tiendas").objectStore("tiendas");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected == cursor.value.name) {
                var request = db.transaction(["tiendas"], "readwrite").objectStore("tiendas").delete(num);
                request.onsuccess = function (event) {
                    alert("Se borró correctamente la tienda de la base de datos.");
                }

            }
            cursor.continue();
        }
    };

    
    
    
    
    
    
    
    shopsMenusPopulate();
    removeshop();
    validado();
}









function modifyshop() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var modif = document.createElement("p");
    modif.textContent = "Seleccionar tienda:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "selectcat");
    for (var i = 0; i < tiendas.length; i++) {
        var option = document.createElement("option");
        option.textContent = tiendas[i].name;
        input1.appendChild(option);
    }
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo nombre:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id", "inputcatnombre");
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "modifyshop2()");

    d.appendChild(form);
    form.appendChild(modif);
    form.appendChild(input1);
    form.appendChild(nuevo);
    form.appendChild(input2);
    form.appendChild(boton);
    validado();
}

function modifyshop2() {
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    var new1= document.getElementById("inputcatnombre").value;
    for (var i = 0; i < tiendas.length; i++) {
        if (tiendas[i].name == selected) {
            tiendas[i].name = new1;
        }
    }
    
    
    
    var objectStore = db.transaction("tiendas").objectStore("tiendas");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected == cursor.value.name) {
                var request = db.transaction(["tiendas"], "readwrite").objectStore("tiendas").delete(num);
                var active = dataBase.result;
                var data = active.transaction(["tiendas"], "readwrite")
                var object = data.objectStore("tiendas");

                var request = object.put({
                    name: new1,
                    id: cursor.key
                });
                request.onsuccess=function(){
                    alert("Modificación realizada correctamente.")
                }
            }
            cursor.continue();
        }
    };
    
    
    
    shopsMenusPopulate();
    modifyshop();
    validado();
}









function addprod() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo producto:";
    var modif = document.createElement("p");
    modif.textContent = "Seleccionar tienda:";
    var input = document.createElement("select");
    input.setAttribute("class", "campos");
    input.setAttribute("id", "selectcat");
    for (var i = 0; i < tiendas.length; i++) {
        var option = document.createElement("option");
        option.textContent = tiendas[i].name;
        input.appendChild(option);
    }
    var modif8 = document.createElement("p");
    modif8.textContent = "Seleccionar categoría:";
    var input8 = document.createElement("select");
    input8.setAttribute("class", "campos");
    input8.setAttribute("id", "selectcat8");
    for (var i = 0; i < categorias.length; i++) {
        var option = document.createElement("option");
        option.textContent = categorias[i].title;
        input8.appendChild(option);
    }
    var nuevo2 = document.createElement("p");
    nuevo2.textContent = "Nombre:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "inputnombre");
    var nuevo3 = document.createElement("p");
    nuevo3.textContent = "Imagen:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id", "inputimagen");
    var nuevo4 = document.createElement("p");
    nuevo4.textContent = "Precio:";
    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "campos");
    input3.setAttribute("id", "inputprecio");
    var nuevo5 = document.createElement("p");
    nuevo5.textContent = "Stock:";
    var input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("class", "campos");
    input4.setAttribute("id", "inputstock");


    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "addprod2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(modif);
    form.appendChild(input);
    form.appendChild(modif8);
    form.appendChild(input8);
    form.appendChild(nuevo2);
    form.appendChild(input1);
    form.appendChild(nuevo3);
    form.appendChild(input2);
    form.appendChild(nuevo4);
    form.appendChild(input3);
    form.appendChild(nuevo5);
    form.appendChild(input4);
    form.appendChild(boton);
    validado();
}

function addprod2() {
    var serial = productos[productos.length - 1].serialNumber + 1;
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    var combo8 = document.getElementById("selectcat8");
    var selected8 = combo8.options[combo8.selectedIndex].text;

    for (var i = 0; i < tiendas.length; i++) {
        if (tiendas[i].name == selected) {
            var tienda = tiendas[i];
        }
    }

    for (var i = 0; i < categorias.length; i++) {
        if (categorias[i].title == selected8) {
            var cate = categorias[i];
        }
    }

    var x = new Product(serial, document.getElementById("inputnombre").value, document.getElementById("inputprecio").value);

    x.images[0] = document.getElementById("inputimagen").value;
    x.cat = cate;

    almacen.addProduct(x, categorias[1]);
    almacen.addProductInShop(x, tienda, document.getElementById("inputstock").value);
    
    
    
    
    
    
    var active = dataBase.result;
    var data = active.transaction(["productos"], "readwrite")
    var object = data.objectStore("productos");

    var request = object.put({
        name: document.getElementById("inputnombre").value,
        images: document.getElementById("inputimagen").value,
        cat: cate,
        price: document.getElementById("inputprecio").value,
        description: "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ul",
        stock: document.getElementById("inputstock").value
    });

    request.onerror = function (e) {
        alert("Error de inserción de tiendas.");
    }

    data.oncomplete = function (e) {
        alert("Se agregó correctamente el nuevo objeto a la base de datos.");
    }
    
    
    
    
    addprod();
    validado();
}









function removeprod() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Seleccionar tienda:";
    var input = document.createElement("select");
    input.setAttribute("class", "campos");
    input.setAttribute("id", "selecttienda");
    for (var i = 0; i < tiendas.length; i++) {
        var option = document.createElement("option");
        option.textContent = tiendas[i].name;
        input.appendChild(option);
    }
    var nuevo1 = document.createElement("p");
    nuevo1.textContent = "Seleccionar producto:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "selectcat");
    for (var i = 0; i < productos.length; i++) {
        var option = document.createElement("option");
        option.textContent = productos[i].name;
        input1.appendChild(option);
    }
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "removeprod2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input);
    form.appendChild(nuevo1);
    form.appendChild(input1);
    form.appendChild(boton);
    validado();
}

function removeprod2() {
    var combo = document.getElementById("selecttienda");
    var selected = combo.options[combo.selectedIndex].text;
    var combo1 = document.getElementById("selectcat");
    var selected1 = combo1.options[combo1.selectedIndex].text;

    for (var i = 0; i < tiendas.length; i++) {
        if (tiendas[i].name == selected) {
            var tienda = tiendas[i].name;
            for (var j = 0; j < productos.length; j++) {
                if (productos[j].name == selected1) {
                    var producto = productos[j].name;
                    almacen.removeProduct(producto, tienda);
                }
            }
        }
    }
    
    
    var objectStore = db.transaction("productos").objectStore("productos");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected1 == cursor.value.name) {
                var request = db.transaction(["productos"], "readwrite").objectStore("productos").delete(num);
                request.onsuccess = function (event) {
                    alert("Se borró correctamente el producto de la base de datos.");
                }

            }
            cursor.continue();
        }
    };
    
    

    removeprod();
    validado();
}









function modifyprod() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo producto:";
    var nuevo = document.createElement("p");
    nuevo.textContent = "Seleccionar tienda:";
    var input = document.createElement("select");
    input.setAttribute("class", "campos");
    input.setAttribute("id", "selecttienda");
    for (var i = 0; i < tiendas.length; i++) {
        var option = document.createElement("option");
        option.textContent = tiendas[i].name;
        input.appendChild(option);
    }
    var modif = document.createElement("p");
    modif.textContent = "Seleccionar producto:";
    var input5 = document.createElement("select");
    input5.setAttribute("class", "campos");
    input5.setAttribute("id", "selectcat");
    for (var i = 0; i < productos.length; i++) {
        var option = document.createElement("option");
        option.textContent = productos[i].name;
        input5.appendChild(option);
    }
    var nuevo2 = document.createElement("p");
    nuevo2.textContent = "Nuevo nombre:";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "inputnombre");
    var nuevo3 = document.createElement("p");
    nuevo3.textContent = "Nueva imagen:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id", "inputimagen");
    var nuevo4 = document.createElement("p");
    nuevo4.textContent = "Nuevo precio:";
    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "campos");
    input3.setAttribute("id", "inputprecio");
    var nuevo5 = document.createElement("p");
    nuevo5.textContent = "Nuevo stock:";
    var input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("class", "campos");
    input4.setAttribute("id", "inputstock");


    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "modifyprod2()");

    d.appendChild(form);
    form.appendChild(nuevo);
    form.appendChild(input);
    form.appendChild(modif);
    form.appendChild(input5);
    form.appendChild(nuevo2);
    form.appendChild(input1);
    form.appendChild(nuevo3);
    form.appendChild(input2);
    form.appendChild(nuevo4);
    form.appendChild(input3);
    form.appendChild(nuevo5);
    form.appendChild(input4);
    form.appendChild(boton);
    validado();
}

function modifyprod2() {
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    var combo1 = document.getElementById("selecttienda");
    var selected1 = combo1.options[combo1.selectedIndex].text;


    
    var w1 = document.getElementById("inputnombre").value;
    var w2 = document.getElementById("inputimagen").value;
    var w3 = document.getElementById("inputprecio").value;
    var w4 = document.getElementById("inputstock").value;
    
    
    
    for (var i = 0; i < tiendas.length; i++) {
        if (tiendas[i].name == selected1) {
            var tienda = tiendas[i];
            for (var j = 0; j < tienda.products.length; j++) {
                if (tienda.products[j].name == selected) {
                    tienda.products[j].name = document.getElementById("inputnombre").value;
                    tienda.products[j].images[0] = document.getElementById("inputimagen").value;
                    tienda.products[j].price = document.getElementById("inputprecio").value;
                    tienda.products[j].stock = document.getElementById("inputstock").value;
                }
            }
        }
    }


    
    
    
    
    
    var objectStore = db.transaction("productos").objectStore("productos");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected == cursor.value.name) {
                var request = db.transaction(["productos"], "readwrite").objectStore("productos").delete(num);
                var active = dataBase.result;
                var data = active.transaction(["productos"], "readwrite")
                var object = data.objectStore("productos");

                var request = object.put({
                    name: w1,
                    images: w2,
                    price: w3,
                    stock: w4,
                    id: cursor.key
                });
                request.onsuccess=function(){
                    alert("Modificación realizada correctamente.")
                }
            }
            cursor.continue();
        }
    };
    
    
    
    
    
    
    
    
    modifyprod();
    validado();
}









function modifystock() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    var form = document.createElement("form");
    form.setAttribute("class", "formprod");
    var modif = document.createElement("p");
    modif.textContent = "Seleccionar producto:";
    var input1 = document.createElement("select");
    input1.setAttribute("class", "campos");
    input1.setAttribute("id", "selectcat");
    for (var i = 0; i < productos.length; i++) {
        var option = document.createElement("option");
        option.textContent = productos[i].name;
        input1.appendChild(option);
    }
    var nuevo = document.createElement("p");
    nuevo.textContent = "Nuevo stock global:";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "campos");
    input2.setAttribute("id", "inputstock");
    var boton = document.createElement("button");
    boton.textContent = "Aceptar";
    boton.setAttribute("onclick", "modifystock2()");

    d.appendChild(form);
    form.appendChild(modif);
    form.appendChild(input1);
    form.appendChild(nuevo);
    form.appendChild(input2);
    form.appendChild(boton);
    validado();
}

function modifystock2() {
    var combo = document.getElementById("selectcat");
    var selected = combo.options[combo.selectedIndex].text;
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].name == selected) {
            productos[i].stockglobal = document.getElementById("inputstock").value;
            varcont=i;
        }
    }
    
        var w1 = productos[varcont].name;
        var w2 = productos[varcont].images[0];
        var w3 = productos[varcont].price;
        var w4 = document.getElementById("inputstock").value;
    
    
    
    
    
    
    
    
    var objectStore = db.transaction("productos").objectStore("productos");
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            if (selected == cursor.value.name) {
                var request = db.transaction(["productos"], "readwrite").objectStore("productos").delete(num);
                var active = dataBase.result;
                var data = active.transaction(["productos"], "readwrite")
                var object = data.objectStore("productos");

                var request = object.put({
                    name: w1,
                    images: w2,
                    price: w3,
                    stock: w4,
                    id: cursor.key
                });
                request.onsuccess=function(){
                    alert("Modificación realizada correctamente.")
                }
            }
            cursor.continue();
        }
    };
    
    
    
    
    
    modifystock();
    validado();
}


/*
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("bottonacceso").innerHTML = localStorage.clickcount ;
    } else {
        document.getElementById("result").innerHTML = "Usuario incorrecto.";
    }
}
*/


window.onload = acceso();
