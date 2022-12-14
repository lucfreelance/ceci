let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let iconMenuMobile = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let iconShopping = document.querySelector(".navbar-shopping-cart");
let asideShopping = document.querySelector(".product-detail");
let divcardscontainer = document.querySelector(".cards-container");
let productDetailLeft = document.querySelector(".product-detail-left");
let productDetailClose = document.querySelector(".product-detail-close");
let myordercontentContainer = document.querySelector(".my-order-content");
let countCarrito = document.querySelector(".navbar-shopping-cart div");
let totalCarrito = document.querySelector(".total");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector(".boton-modal");
let productImageInfor = document.querySelector(
	".product-detail-left > img:nth-child(2)"
);
let labelPriceInfo = document.querySelector(
	".product-info-left p:nth-child(1)"
);
let labelNameInfo = document.querySelector(".product-info-left p:nth-child(2)");
let labelInforInfo = document.querySelector(
	".product-info-left p:nth-child(3)"
);
let buttonInfo = document.querySelector(".add-to-cart-button");
let productosEnCarrito = [];
let productoACarrito = [];

countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
totalCarrito.innerText = "$0.00";

emailMenu.addEventListener("click", toggleMenu);
iconMenuMobile.addEventListener("click", toggleMenuMobile);
iconShopping.addEventListener("click", toggleAsideShopping);
productDetailClose.addEventListener("click", closeProductDetail);
buttonInfo.addEventListener("click", butonClick);
cerrarModal.addEventListener("click", closeModal);

function butonClick() {
	agregarCarrito(productoACarrito);
}

function toggleMenu() {
	productDetailLeft.classList.add("inactive");
	asideShopping.classList.add("inactive");
	desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
	productDetailLeft.classList.add("inactive");
	asideShopping.classList.add("inactive");
	mobileMenu.classList.toggle("inactive");
}

function toggleAsideShopping() {
	productDetailLeft.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	asideShopping.classList.toggle("inactive");
}

function openProductDetail() {
	asideShopping.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	productDetailLeft.classList.remove("inactive");
}

function closeProductDetail() {
	productoACarrito = [];
	asideShopping.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	productDetailLeft.classList.add("inactive");
}

function verificarProducto(nameProduct) {
	return productosEnCarrito.some(function (articulo) {
		return articulo === nameProduct;
	});
}

function closeModal() {
	modal.style.display = "none";
}

let productList = [];
productList.push({
	name: "Bolso 1",
	price: 50,
	image: "https://i.imgur.com/tQfb2IV.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Caf??, Ocre, Habano. Dise??o original manchas.",
});
productList.push({
	name: "Bolso 2",
	price: 50,
	image: "https://i.imgur.com/LPdO5fN.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Caf??, Azul cielo, Negro. Dise??o original florido.",
});
productList.push({
	name: "Bolso 3",
	price: 70,
	image: "https://i.imgur.com/DRtKJ4I.jpg",
	desc: "???????? Extraordinario kit Bolso + Monedero. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Tama??o; peque??o. Gama colores: Gris, Amarillo, Azul Cielo, Rosa. Dise??o original grilla.",
});
productList.push({
	price: 60,
	name: "Bolso 4",
	image: "https://i.imgur.com/pdFUBr6.jpg",
	desc: "???? Hermoso bolso circular tama??o peque??o. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Violeta, Naranja, Amarillo, Verde. Dise??o circular.",
});
productList.push({
	name: "Bolso 5",
	price: 60,
	image: "https://i.imgur.com/25evH47.jpg",
	desc: "???? Hermoso bolso tama??o grande. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Pastel multicolor. Dise??o original florido.",
});
productList.push({
	name: "Bolso 6",
	price: 50,
	image: "https://i.imgur.com/akpxc0L.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris, Negro, Dorado. Dise??o original florido.",
});
productList.push({
	name: "Bolso 7",
	price: 45,
	image: "https://i.imgur.com/MbLVqtk.jpg",
	desc: "???? Bonito bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Azules, Violeta. Dise??o original matizado  entrelazado.",
});
productList.push({
	name: "Bolso 8",
	price: 50,
	image: "https://i.imgur.com/2fKtq49.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Caf??. Dise??o original florido minimalista cl??sico.",
});
productList.push({
	name: "Bolso 9",
	price: 50,
	image: "https://i.imgur.com/U4qlxqf.gif	",
	desc: "???? Lindo bolso circular tama??o peque??o. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Psicod??lico (cara 1), Gris, Verde /Cara 2). Dise??o doble faz circular.",
});
productList.push({
	name: "Bolso 10",
	price: 50,
	image: "https://i.imgur.com/x5qSVxO.jpg",
	desc: "???? Hermoso bolso tama??o peque??o. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Rojo, Gris. Dise??o paneles.",
});
productList.push({
	name: "Bolso 11",
	price: 90,
	image: "https://i.imgur.com/sRtj2M3.jpg",
	desc: "???? Hermoso bolso tama??o grande. Elaborado a mano en cuero e hilo artesanal. Gama colores: Gris. Dise??o cl??sico.",
});
productList.push({
	name: "Bolso 12",
	price: 50,
	image: "https://i.imgur.com/0XMa4gg.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Verdes, Gris, Negro. Dise??o florido.",
});
productList.push({
	name: "Bolso 13",
	price: 50,
	image: "https://i.imgur.com/rp7jFu2.jpg	",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris cl??sico; dise??o entrelazado.",
});
productList.push({
	name: "Bolso 14",
	price: 45,
	image: "https://i.imgur.com/ZRMXOJt.jpg",
	desc: "???? Lindo bolso tama??o peque??o. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Caf??s. Dise??o florido estilo monedero.",
});
productList.push({
	name: "Bolso 15",
	price: 45,
	image: "https://i.imgur.com/uuSWS3m.jpg",
	desc: "???? Lindo bolso tama??o peque??o tejido a mano con hilo Terlenka y chapitas de bebidas enlatadas. Tama??o peque??o. Gama colores: Gris, Blanco. Dise??o estilo cuerno.",
});
productList.push({
	name: "Bolso 16",
	price: 45,
	image: "https://i.imgur.com/vhXZoCz.jpg",
	desc: "???? Lindo bolso circular tama??o peque??o. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Rojo. Dise??o circular.",
});
productList.push({
	name: "Bolso 17",
	price: 60,
	image: "https://i.imgur.com/oki3ZIh.jpg",
	desc: "???? Lindo bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris claro. Dise??o florido.",
});
productList.push({
	name: "Bolso 18",
	price: 45,
	image: "https://i.imgur.com/LQz4Jw2.jpg",
	desc: "???? Lindo bolso circular tejido a mano con hilo Terlenka (crochet) y chapitas de bebidas enlatadas. Tama??o peque??o. Gama colores: Matizado psicod??lico; estilo gatita.",
});
productList.push({
	name: "Bolso 19",
	price: 60,
	image: "https://i.imgur.com/GaJ0r3J.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris, Negro. Dise??o florido en l??neas.",
});
productList.push({
	name: "Bolso 20",
	price: 45,
	image: "https://i.imgur.com/q7dz0qv.gif",
	desc: "???? Lindo bolso tama??o peque??o tejido a mano con hilo Terlenka y chapitas de bebidas enlatadas. Tama??o peque??o. Gama colores: Variado seg??n modelo. Dise??o estilo cuerno.",
});
productList.push({
	name: "Bolso 21",
	price: 50,
	image: "https://i.imgur.com/w0n8Sz0.jpg",
	desc: "???? Bonito bolso tama??o mediano tejido a mano con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris. Dise??o cl??sico.",
});
productList.push({
	name: "Bolso 22",
	price: 65,
	image: "https://i.imgur.com/ri4FW1Q.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Blanco, negro, Naranja. Dise??o flor escala.",
});
productList.push({
	name: "Bolso 23",
	price: 40,
	image: "https://i.imgur.com/2htD5CU.jpg",
	desc: "???? Bonito bolso tama??o peque??o. Elaborado a mano en crochet en cuero e hilo artesanal. Gama colores: Rojo. Dise??o minimalista.",
});
productList.push({
	name: "Bolso 24",
	price: 40,
	image: "https://i.imgur.com/GcfPXWT.jpg",
	desc: "???? Hermoso bolso circular tama??o peque??o. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Ocre, Negro. Dise??o circular.",
});
productList.push({
	name: "Bolso 25",
	price: 70,
	image: "https://i.imgur.com/7v03NvC.jpg",
	desc: "???? Hermoso bolso tama??o grande. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris, Fucsia. Dise??o florido.",
});
productList.push({
	name: "Bolso 26",
	price: 60,
	image: "https://i.imgur.com/CboMoXs.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Negro, Dorado. Dise??o florido.",
});
productList.push({
	name: "Bolso 27",
	price: 55,
	image: "https://i.imgur.com/a5uAXwb.jpg",
	desc: "???????? Lindo kit Bolso + Monedero circular. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Tama??o; peque??o. Gama colores: Gris. Dise??o original paneles.",
});
productList.push({
	name: "Bolso 28",
	price: 60,
	image: "https://i.imgur.com/Q6XZ2Jr.jpg",
	desc: "???? Hermoso bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris, Negro. Dise??o patrones.",
});
productList.push({
	name: "Bolso 29",
	price: 60,
	image: "https://i.imgur.com/gPHgTar.jpg",
	desc: "???? Hermoso bolso tama??o grande. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Blanco, Dorado, negro. Dise??o original florido.",
});
productList.push({
	name: "Bolso 30",
	price: 60,
	image: "https://i.imgur.com/NsIpDmk.jpg",
	desc: "???? Hermoso bolso tama??o grande. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Pardo, Gris, Amarillo, Negro. Dise??o original florido.",
});
productList.push({
	name: "Bolso 31",
	price: 55,
	image: "https://i.imgur.com/QRGfznE.jpg",
	desc: "???????? Lindo kit Bolso + Monedero circular. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Tama??o; peque??o. Gama colores: Gris, Ocre. Dise??o original circular.",
});
productList.push({
	name: "Bolso 32",
	price: 40,
	image: "https://i.imgur.com/GwZK50J.jpg",
	desc: "???? Bonito bolso tama??o mediano. Elaborado a mano en crochet con hilo terlenka y chapitas de bebidas enlatadas. Gama colores: Gris, Vino tinto. Dise??o original lineas.",
});

function renderListProduct(productList) {
	for (const product of productList) {
		let divproductCard = document.createElement("div");
		let imgproductcard = document.createElement("img");
		let divproductinfo = document.createElement("div");
		let divdivproductinfo = document.createElement("div");
		let pprice = document.createElement("p");
		let pname = document.createElement("p");
		let figureproductinfo = document.createElement("figure");
		let imgproductinfo = document.createElement("img");
		divproductCard.classList.add("product-card");
		imgproductcard.setAttribute("src", product.image);
		divproductinfo.classList.add("product-info");
		pprice.innerText = "$" + product.price;
		pname.innerText = product.name;
		imgproductinfo.setAttribute("src", "./icons/bt_add_to_cart.svg");

		figureproductinfo.appendChild(imgproductinfo);
		divdivproductinfo.appendChild(pprice);
		divdivproductinfo.appendChild(pname);

		divproductinfo.appendChild(divdivproductinfo);
		divproductinfo.appendChild(figureproductinfo);

		divproductCard.appendChild(imgproductcard);
		divproductCard.appendChild(divproductinfo);

		divcardscontainer.appendChild(divproductCard);

		imgproductcard.addEventListener("click", function () {
			mostrarInfoProduct(
				product.image,
				product.price,
				product.name,
				product.desc
			);
			openProductDetail();
		});

		imgproductinfo.addEventListener("click", function () {
			let productoAgregado = [];
			productoAgregado.push({
				name: product.name,
				price: product.price,
				image: product.image,
			});
			agregarCarrito(productoAgregado);
		});
	}
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto) {
	if (verificarProducto(producto[0].name)) {
		productoACarrito = [];
		return (modal.style.display = "grid");
	}

	/* Creacion de elementos HTML */
	let divShoppingCart = document.createElement("div");
	let figureShoppingCart = document.createElement("figure");
	let imgfigureShoppingCart = document.createElement("img");
	let pnameShoppingCart = document.createElement("p");
	let ppriceShoppingCart = document.createElement("p");
	let imgcloseShoppingCart = document.createElement("img");

	/* Se agrega contenido a cada uno de los elementos */
	divShoppingCart.classList.add("shopping-cart");
	imgfigureShoppingCart.setAttribute("src", producto[0].image);
	pnameShoppingCart.innerText = producto[0].name;
	ppriceShoppingCart.innerText = "$" + producto[0].price;
	imgcloseShoppingCart.setAttribute("src", "./icons/icon_close.png");
	imgcloseShoppingCart.classList.add("removeList");

	/* Se insertan los documentos */
	figureShoppingCart.appendChild(imgfigureShoppingCart);
	divShoppingCart.appendChild(figureShoppingCart);
	divShoppingCart.appendChild(pnameShoppingCart);
	divShoppingCart.appendChild(ppriceShoppingCart);
	divShoppingCart.appendChild(imgcloseShoppingCart);
	myordercontentContainer.appendChild(divShoppingCart);

	/* Se agregan la cantidad de productos ademas de la suma de precios */
	countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
	totalCarrito.innerText =
		"$" +
		(Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price));
	productosEnCarrito.push(producto[0].name);

	/* Funcion para quitar productos del carrito */
	imgcloseShoppingCart.addEventListener("click", function () {
		divShoppingCart.remove();
		countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
		totalCarrito.innerText =
			"$" +
			(Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price));
		productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name), 1);
	});
}

function mostrarInfoProduct(imagen, precio, nombre, descripcion) {
	productImageInfor.setAttribute("src", imagen);
	labelPriceInfo.innerText = "$" + precio;
	labelNameInfo.innerText = nombre;
	labelInforInfo.innerText = descripcion;
	productoACarrito = [];
	productoACarrito.push({
		name: nombre,
		price: precio,
		image: imagen,
	});
}

renderListProduct(productList);
