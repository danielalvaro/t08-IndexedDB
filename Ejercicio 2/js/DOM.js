var ventana;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
dataBase = indexedDB.open("dbcat", 1);



dataBase.onerror=function(){
    alert("Error al cargar la DB.");
}


dataBase.onupgradeneeded = function (e) {

    var active = dataBase.result;
    var object = active.createObjectStore('categorias', {
        keyPath: 'id',
        autoIncrement: true
    });
    object.createIndex('by_title', 'title', {
        unique: false
    });

    var object1 = active.createObjectStore('tiendas', {
        keyPath: 'id',
        autoIncrement: true
    });
    object1.createIndex('by_name', 'name', {
        unique: false
    });

    var object2 = active.createObjectStore('productos', {
        keyPath: 'id',
        autoIncrement: true
    });
    object2.createIndex('by_name', 'name', {
        unique: false
    });
    
    dataBase.onsuccess=function(e){
        init();
        addShopsBase();
        addCategoryBase();
        addProdsBase();
    }
    
}

    dataBase.onsuccess=function(e){
        init();
    alert("DB loaded");
        db=dataBase.result;
        
    initPopulate();
    menuCategoryShopPopulate();
    shopsMenusPopulate();
    acceso();
};



    
   








function init() {
    almacen = new StoreHouse();
    almacen.nameSH = "almacen";
    var co1 = new Coords(90, 68);

    //Tiendas:
    var t1 = new Shop("Tienda Norte", co1);
    almacen.addShop(t1);
    var t2 = new Shop("Tienda Oeste", co1);
    almacen.addShop(t2);
    var t3 = new Shop("Tienda Sur", co1);
    almacen.addShop(t3);
    var t4 = new Shop("Tienda Este", co1);
    almacen.addShop(t4);

    //Categorías:
    var c1 = new Category("Camisetas");
    almacen.addCategory(c1);
    var c2 = new Category("Pantalones");
    almacen.addCategory(c2);
    var c3 = new Category("Zapatillas");
    almacen.addCategory(c3);
    var c4 = new Category("Sudaderas");
    almacen.addCategory(c4);
    var c0 = new Category("Todo");
    almacen.addCategory(c0);

    //Productos:
    var p1 = new Product(1, "Camiseta negra", 25);
    p1.images[0] = "img/p1.png";
    p1.cat = c1;
    p1.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p1, c1);
    var p2 = new Product(2, "Camiseta blanca", 20);
    p2.images[0] = "img/p2.png";
    p2.cat = c1;
    p2.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p2, c1);
    var p3 = new Product(3, "Camiseta roja", 18);
    p3.images[0] = "img/p3.png";
    p3.cat = c1;
    p3.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p3, c1);
    var p4 = new Product(4, "Camiseta azul", 30);
    p4.images[0] = "img/p4.png";
    p4.cat = c1;
    p4.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p4, c1);
    var p5 = new Product(5, "Pantalón rojo", 40);
    p5.images[0] = "img/p5.png";
    p5.cat = c2;
    p5.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p5, c1);
    var p6 = new Product(6, "Pantalón azul", 30);
    p6.images[0] = "img/p6.png";
    p6.cat = c2;
    p6.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p6, c1);
    var p7 = new Product(7, "Pantalón negro", 40);
    p7.images[0] = "img/p7.png";
    p7.cat = c2;
    p7.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p7, c1);
    var p8 = new Product(8, "Zapatillas blancas", 30);
    p8.images[0] = "img/p8.png";
    p8.cat = c3;
    p8.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p8, c1);
    var p9 = new Product(9, "Zapatillas negras", 40);
    p9.images[0] = "img/p9.png";
    p9.cat = c3;
    p9.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p9, c1);
    var p10 = new Product(10, "Sudadera negra", 40);
    p10.images[0] = "img/p10.png";
    p10.cat = c4;
    p10.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p10, c1);
    var p11 = new Product(11, "Sudadera gris", 30);
    p11.images[0] = "img/p11.png";
    p11.cat = c4;
    p11.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p11, c1);
    var p12 = new Product(12, "Sudadera verde", 40);
    p12.images[0] = "img/p12.png";
    p12.cat = c4;
    p12.description = "Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, felis vel elementum ultrices, elit arcu pellentesque lorem, nec vulputate nibh tellus sed nisl.";
    almacen.addProduct(p12, c1);

    p1.stock = 4;
    p2.stock = 4;
    p3.stock = 4;
    p4.stock = 2;
    p5.stock = 3;
    p6.stock = 10;
    p7.stock = 1;
    p8.stock = 9;
    p9.stock = 2;
    p10.stock = 1;
    p11.stock = 4;
    p12.stock = 8;

    stock = 20;

    for (var z = 0; z < productos.length; z++) {
        productos[z].stockglobal = 22;
    }



    almacen.addProductInShop(p1, t1, 2);
    almacen.addProductInShop(p2, t1, 1);
    almacen.addProductInShop(p3, t1, 8);
    almacen.addProductInShop(p4, t1, 4);
    almacen.addProductInShop(p5, t1, 0);
    almacen.addProductInShop(p6, t1, 2);
    almacen.addProductInShop(p8, t1, 4);
    almacen.addProductInShop(p9, t1, 4);
    almacen.addProductInShop(p10, t1, 4);
    almacen.addProductInShop(p11, t1, 1);
    almacen.addProductInShop(p12, t1, 2);

    almacen.addProductInShop(p1, t2, 1);
    almacen.addProductInShop(p2, t2, 4);
    almacen.addProductInShop(p4, t2, 2);
    almacen.addProductInShop(p5, t2, 4);
    almacen.addProductInShop(p6, t2, 4);
    almacen.addProductInShop(p7, t2, 3);
    almacen.addProductInShop(p8, t2, 4);
    almacen.addProductInShop(p9, t2, 9);
    almacen.addProductInShop(p11, t2, 4);

    almacen.addProductInShop(p2, t3, 4);
    almacen.addProductInShop(p3, t3, 4);
    almacen.addProductInShop(p4, t3, 4);
    almacen.addProductInShop(p5, t3, 4);
    almacen.addProductInShop(p6, t3, 4);
    almacen.addProductInShop(p9, t3, 4);
    almacen.addProductInShop(p10, t3, 4);
    almacen.addProductInShop(p11, t3, 4);
    almacen.addProductInShop(p12, t3, 4);

    almacen.addProductInShop(p1, t4, 4);
    almacen.addProductInShop(p2, t4, 4);
    almacen.addProductInShop(p3, t4, 4);
    almacen.addProductInShop(p5, t4, 4);
    almacen.addProductInShop(p6, t4, 4);
    almacen.addProductInShop(p7, t4, 4);
    almacen.addProductInShop(p9, t4, 4);
    almacen.addProductInShop(p10, t4, 4);
    almacen.addProductInShop(p11, t4, 4);
    almacen.addProductInShop(p12, t4, 4);
}


addCategoryBase();



    function addCategoryBase() {

        var active = dataBase.result;
        var data = active.transaction(["categorias"], "readwrite");
        var object = data.objectStore("categorias");

        for (var i = 0; i < categorias.length; i++) {
            var request = object.put({
                title: categorias[i].title
            });
        }

        request.onerror = function (e) {
            alert(request.error.name + '\n\n' + request.error.message);
        };

        data.oncomplete = function (e) {
            alert('Objects successfully added');
        };
    }




    addShopsBase();



    function addShopsBase() {

        var active = dataBase.result;
        var data = active.transaction(["tiendas"], "readwrite");
        var object = data.objectStore("tiendas");

        for (var i = 0; i < tiendas.length; i++) {
            var request = object.put({
                name: tiendas[i].name
            });
        }

        request.onerror = function (e) {
            alert(request.error.name + '\n\n' + request.error.message);
        };

        data.oncomplete = function (e) {
            alert('Objects successfully added');
        };
    }

    
    addProdsBase();


    function addProdsBase() {

        var active = dataBase.result;
        var data = active.transaction(["productos"], "readwrite");
        var object = data.objectStore("productos");

        for (var i = 0; i < productos.length; i++) {
            var request = object.put({
                name: productos[i].name,
                images: productos[i].images[0],
                cat: productos[i].cat,
                price: productos[i].price,
                description: productos[i].description
            });
        }

        request.onerror = function (e) {
            alert(request.error.name + '\n\n' + request.error.message);
        };

        data.oncomplete = function (e) {
            alert('Objects successfully added');
        };
    }






function initPopulate() {
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    d.innerHTML = "<p>ERP organizativo del complejo de tiendas de la ciudad con productos de ropa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula nisl et mattis volutpat. Proin at placerat odio. Maecenas euismod in nisl vel feugiat. Nunc ut neque sit amet diam congue fringilla. Nam viverra ante in magna tempus consectetur. Sed nec leo sed lectus vulputate tempus. Proin a finibus metus, non rhoncus felis. Integer sit amet ligula eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas at augue faucibus, ultricies felis a, pellentesque augue. Nulla facilisi. Mauris sodales nisl nec purus ornare sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sit amet mollis elit. Nunc feugiat neque vel consectetur feugiat. Vivamus pretium lectus non vehicula vehicula. Aenean vestibulum dui suscipit semper mollis. Aenean interdum facilisis diam, ac volutpat lacus elementum eget. Fusce non mauris convallis, consectetur lacus mollis, mollis est. Donec vitae aliquam odio. Donec turpis odio, molestie nec lacus at, sollicitudin pharetra libero. Integer venenatis enim id lorem pulvinar porta. Etiam sollicitudin condimentum venenatis. Aliquam ac enim at diam fringilla suscipit eu et nisl. Quisque aliquet tempor leo, ut posuere quam molestie in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin facilisis in urna eget consequat. In in fringilla urna, ac efficitur massa. Integer leo dolor, hendrerit id libero vitae, iaculis auctor ex. Sed at tristique ipsum. Praesent eget gravida purus. Sed consequat ullamcorper nibh. Maecenas ex arcu, ornare porta velit sed, posuere porta elit. Proin interdum fermentum ultrices. Ut ultrices tincidunt erat, nec commodo tellus egestas nec. Fusce id euismod nisi, ac vulputate turpis. Nulla facilisis orci eget neque finibus rhoncus. In in fringilla urna, ac efficitur massa. Integer leo dolor, hendrerit id libero vitae, iaculis auctor ex. Sed at tristique ipsum. Praesent eget gravida purus. Sed consequat ullamcorper nibh. Maecenas ex arcu, ornare porta velit sed, posuere porta elit. Proin interdum fermentum ultrices. Ut ultrices tincidunt erat, nec commodo tellus egestas nec. Fusce id euismod nisi, ac vulputate turpis. Nulla facilisis orci eget neque finibus rhoncus.Proin interdum fermentum ultrices. Ut ultrices tincidunt erat, nec commodo tellus egestas nec. Fusce id euismod nisi, ac vulputate turpis. Nulla facilisis orci eget neque finibus rhoncus.Proin interdum fermentum ultrices. Ut ultrices tincidunt erat, nec commodo tellus egestas nec. Fusce id euismod nisi, ac vulputate turpis. Nulla facilisis orci eget neque finibus rhoncus.</p>";
}









function shopsMenusPopulate() {
    
    /*
    var transaction = db.transaction(["tiendas"], "readwrite");
    transaction.oncomplete = function (event) {
    };

    transaction.onerror = function (event) {
        alert('Transaction failed.');
    };

    var objectStore = db.transaction("tiendas").objectStore("tiendas");
    
    var d = document.getElementById("nav");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            num=num-1;
            document.getElementById("nav").innerHTML += '<a href="#" onclick="shopPopulate(tiendas[' + num + '])">' + cursor.value.name + '</a>';
            cursor.continue();
        }
    };
    */
    var d = document.getElementById("nav");
    while (d.hasChildNodes())
        d.removeChild(d.firstChild);
    for (var i = 0; i < tiendas.length; i++) {
            document.getElementById("nav").innerHTML += '<a href="#" onclick="shopPopulate(tiendas[' + i + '])">' + tiendas[i].name + '</a>';
    }
}









function shopPopulate(tienda) {

    glob = tienda;
    var d = document.getElementById("prod");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);

    var i = 0;
    var div = "div";
    do {
        document.getElementById("prod").innerHTML += "<div><a href='#' onmouseover='productShopPopulate(" + i + ")' onmouseout='productShopPopulate2(" + i + ")' onclick='globalProductPopulate(glob," + i + ")' id='div" + i + "'><h3>" + tienda.products[i].name + "</h3><img src='" + tienda.products[i].images[0] + "'><span id='span" + i + "'>" + tienda.products[i].description + "</span><h4>" + tienda.products[i].price + " €</h4></a><button onclick='abrirVentana(glob," + i + ")'><span>></span></button></div>";
        i++;
    } while (i < productos.length - 1);

}






function menuCategoryShopPopulate() {
    /*
    var transaction = db.transaction(["categorias"], "readwrite");
    transaction.oncomplete = function (event) {
    };

    transaction.onerror = function (event) {
        alert('Transaction failed.');
    };
    
    var objectStore = db.transaction("categorias").objectStore("categorias");
    
    var d = document.getElementById("cat");
    while (d.hasChildNodes()) d.removeChild(d.firstChild);
    
    objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var num = cursor.key;
            num=num-1;
            document.getElementById("cat").innerHTML += '<a href="#" onclick="productsCategoryShopPopulate(glob,categorias[' + num + '])">' + cursor.value.title + "</a>";
            cursor.continue();
        }
    };
    */
    var d = document.getElementById("cat");
    while (d.hasChildNodes())
        d.removeChild(d.firstChild);
    for (var i = 0; i < categorias.length; i++) {
        document.getElementById("cat").innerHTML += '<a href="#" onclick="productsCategoryShopPopulate(glob,categorias[' + i + '])">' + categorias[i].title + "</a>";
    }
}









function productsCategoryShopPopulate(tienda, categoria) {
    var d = document.getElementById("prod");
    while (d.hasChildNodes())
        d.removeChild(d.firstChild);

    if (categoria == categorias[categorias.length - 1]) {
        shopPopulate(tienda);
    } else {
        var i = 0;
        do {
            if (tienda.products[i].cat === categoria) {
                document.getElementById("prod").innerHTML += "<div><a href='#' onmouseover='productShopPopulate(" + i + ")' onmouseout='productShopPopulate2(" + i + ")' onclick='globalProductPopulate(glob," + i + ")' id='div" + i + "'><h3>" + tienda.products[i].name + "</h3><img src='" + tienda.products[i].images[0] + "'><span id='span" + i + "'>" + tienda.products[i].description + "</span><h4>" + tienda.products[i].price + " €</h4></a><button onclick='abrirVentana(glob," + i + ")'><span>></span></button></div>";
            }
            i++;
        } while (i < productos.length);
    }
}









function productShopPopulate(i) {
    document.getElementById("span" + i).style.display = "block";

}

function productShopPopulate2(i) {
    document.getElementById("span" + i).style.display = "none";
    document.getElementById("div" + i).style.background = "white";
}









function globalProductPopulate(tienda, i) {
    for (var j = 0; j < productos.length; j++) {
        if (productos[j].name == tienda.products[i].name) {
            document.getElementById("prod").innerHTML = "";
            document.getElementById("prod").innerHTML += "<div id='div" + i + "'><a><h3>" + tienda.products[i].name + "</h3><img src='" + tienda.products[i].images[0] + "'><span id='span" + i + "'>" + tienda.products[i].description + "</span><h4>" + tienda.products[i].price + " €</h4><h3 id='stock" + i + "'>(Stock: " + tienda.products[i].stock + ")</h3></a></div><div id='desc'><h2>Descripción del producto: </h2><p>" + tienda.products[i].description + "</p><h3 id='stock" + i + "'>(Stock global: " + productos[j].stockglobal + ")</h3></div>";
        }
    }
}


function abrirVentana(tienda, i) {
    if (ventana && !ventana.closed) {
        ventana.focus();
    } else {
        ventana = window.open("emergente.html?name=" + tienda.products[i].name + "&price=" + tienda.products[i].price + "&image=" + tienda.products[i].images[0] + "&des=" + tienda.products[i].description + "&stock=" + tienda.products[i].stock + "&i=" + i + " ", "NuevaVentana", "toolbar=yes,scrollbars=yes,resizable=yes, left=-10, width=1250,height=720");
    }
}








