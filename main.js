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
	name: "45-Bolso",
	price: 0,
	image: "https://i.imgur.com/tQfb2IV.jpg",
	desc: "😉",
});
productList.push({
	name: "2-Sandalias",
	price: 60,
	image: "https://i.imgur.com/aVID501.gif",
	desc: "Cómodas sandalias de color limón. De gran agarre y gran resistencia.",
});
productList.push({
	name: "3-Bolso",
	price: 90,
	image: "https://i.imgur.com/DRtKJ4I.jpg",
	desc: "Extraordinario kit Bolso + Monedero en gris y colores primarios. Diseño clásico.",
});
productList.push({
	name: "4-Sandalias",
	price: 45,
	image:
		"https://cdn.pixabay.com/photo/2016/03/31/20/19/actress-1295682_960_720.png",
	desc: "",
});
productList.push({
	name: "5-Bolso",
	price: 60,
	image: "https://i.imgur.com/GcfPXWT.jpg",
	desc: "Bolso redondeado tejido con hilo Terlenka 100% a mano. Perfecto para toda ocasión. 🧶 🤗",
});
productList.push({
	name: "6-Sandalias",
	price: 45,
	image: "https://i.imgur.com/CUDb0wc.jpg",
	desc: "Sandalias rojo otoñal con flor. Lindas, cómodas y de suela resistente. 💙 😉",
});
productList.push({
	name: "7-Bolso",
	price: 65,
	image: "https://i.imgur.com/MbLVqtk.jpg",
	desc: "Bolso tejido a mano con hilo Terlenka (crochet) y como materia prima uso de chapas de bebidas enlatadas. Personaliza el diseño y el color.👜🧵",
});
productList.push({
	name: "8-Sandalias",
	price: 45,
	image: "https://i.imgur.com/UWQ4NuI.jpg",
	desc: "Sandalias clásicas en negro titánio. hermosas y se adaptan al pie con comodidad",
});
productList.push({
	name: "9-Bolso",
	price: 85,
	image: "https://i.imgur.com/U4qlxqf.gif	",
	desc: "Extraordinario bolso doble faz. Redondo. Motivo espiral. Color doble verde vejiga + Psicodélico. Elije según tu ocasión: Clásico o juvenil; Diurno o nocturno.",
});
productList.push({
	name: "10-Sandalias",
	price: 60,
	image: "https://i.imgur.com/4fWNIzQ.jpg",
	desc: "Hermosísimas sandalias de punto blanco-dorado. Suela gruesa para mejor porte y más resistencia.",
});
productList.push({
	name: "11-Bolso",
	price: 100,
	image: "https://i.imgur.com/IQRPbOS.jpeg",
	desc: "Bolso elaborado en cuero y tejido con hilo terlenka... Arte hecho estilo. 👌.",
});
productList.push({
	name: "12-Sandalias",
	price: 0,
	image:
		"https://w7.pngwing.com/pngs/864/583/png-transparent-africa-graphy-black-and-white-black-face-face-black-hair-people-thumbnail.png",
	desc: "",
});
productList.push({
	name: "13-Bolso",
	price: 40,
	image: "https://i.imgur.com/rp7jFu2.jpg	",
	desc: "Harto que los perros defequen en la entrada de tu casa y pisas la mierda al salir? Ahora puedes avisar a los perros que está prohibido defecar en tu entrada o se atendran a las consecuencias legales o a la venganza personal.",
});
productList.push({
	name: "14-Sandalias",
	price: 45,
	image: "https://i.imgur.com/UrAUWk8.jpg",
	desc: "Sandalias flor otoñal. Diseño triangular tono ópalo. Diseño sobrio. Cómoda y resistente 😉",
});
productList.push({
	name: "15-Bolso",
	price: 60,
	image: "https://i.imgur.com/5ApsH5v.jpg",
	desc: "Bolso tejido a mano con hilo Terlenka (crochet) y como materia prima uso de chapas de bebidas enlatadas. Disponible en gran variedad de colores.🧵🧶",
});
productList.push({
	name: "16-Sandalias",
	price: 0,
	image: "https://i.imgur.com/tnf4bqB.jpg",
	desc: "Un extraordinario sombrero que combina el glamour pueblerino y la sofisticación de la ciudad. Y en una mujer sexy se ve mejor.",
});
productList.push({
	name: "17-Bolso",
	price: 0,
	image: "https://i.imgur.com/w3hXImr.jpg",
	desc: "Un monedero reforzado con un modelo bordado y el tamaño perfecto para tus monedas.",
});
productList.push({
	name: "18-Sandalias",
	price: 0,
	image:
		"https://w7.pngwing.com/pngs/201/375/png-transparent-beauty-brunette-girl-woman-face-head-thumbnail.png",
	desc: "Precio por unidad. Diversos colores y una textura de pulpo muy esponjosa.",
});
productList.push({
	name: "19-Bolso",
	price: 0,
	image: "https://i.imgur.com/NsIpDmk.jpg",
	desc: "Si quieres gritarle al mundo que eres una loca fanática de Hello Kitty, ahora puedes llevar tu manía a todas partes en tu coche o en tu mochila.",
});
productList.push({
	name: "20-Sandalias)",
	price: 0,
	image:
		"https://cdn.pixabay.com/photo/2016/04/01/09/16/actress-1299250_960_720.png",
	desc: ".",
});
productList.push({
	name: "21-Bolso",
	price: 0,
	image: "https://i.imgur.com/Q6XZ2Jr.jpg",
	desc: "Para los que extrañan las vervenas, el guaro, el relajo, las montoneras y un lugar donde los mafiosos se sientan como en casa... Además esas chivas a Juanchito con asalto incluído 😉",
});
productList.push({
	name: "22-Sandalias",
	price: 0,
	image: "https://i.imgur.com/Saekg7X.jpg",
	desc: "Este hermoso collar largo de estilo florido ha sido hecho a mano	 en base a semillas y materiales ecológicos.",
});
productList.push({
	name: "23-Bolso",
	price: 0,
	image: "https://i.imgur.com/KCLRn4K.jpg",
	desc: "Un extraordinario sombrero que combina el glamour pueblerino y la sofisticación de la ciudad. Y en una mujer sexy se ve mejor.",
});
productList.push({
	name: "24-Sandalias",
	price: 0,
	image: "https://i.imgur.com/UCftyxz.jpg",
	desc: "Un monedero reforzado con un modelo bordado y el tamaño perfecto para tus monedas.",
});
productList.push({
	name: "25-Bolso",
	price: 0,
	image: "https://i.imgur.com/RVDDxyu.jpg",
	desc: "Precio por unidad. Diversos colores y una textura de pulpo muy esponjosa.",
});
productList.push({
	name: "26-Sandalias.",
	price: 0,
	image:
		"https://cdn.pixabay.com/photo/2013/07/13/10/24/woman-157149_960_720.png",
	desc: "Si quieres gritarle al mundo que eres una loca fanática de Hello Kitty, ahora puedes llevar tu manía a todas partes en tu coche o en tu mochila.",
});
productList.push({
	name: "27-Bolso",
	price: 0,
	image: "https://i.imgur.com/vhXZoCz.jpg",
	desc: "Elaborado 100% a mano en forma de 🌹 . Tejido con hilo terlenka y chapas de bebidas enlatadas ♻️. ✨",
});
productList.push({
	name: "28-Sandalias",
	price: 0,
	image:
		"https://cdn.pixabay.com/photo/2016/03/31/23/40/drawing-1297764_960_720.png",
	desc: "😉",
});
productList.push({
	name: "29-Bolso",
	price: 0,
	image: "https://i.imgur.com/lx6wYfu.jpg",
	desc: "Este hermoso collar largo de estilo florido ha sido hecho a mano	 en base a semillas y materiales ecológicos.",
});
productList.push({
	name: "30-Sandalias",
	price: 0,
	image:
		"https://cdn.pixabay.com/photo/2013/07/13/10/31/beauty-157427_960_720.png",
	desc: "😉.",
});
productList.push({
	name: "31-Bolso",
	price: 0,
	image: "https://i.imgur.com/OAfyNuJ.jpg",
	desc: "Un monedero reforzado con un modelo bordado y el tamaño perfecto para tus monedas.",
});
productList.push({
	name: "32-Sandalias",
	price: 0,
	image:
		"https://w7.pngwing.com/pngs/202/123/png-transparent-japan-japanese-asian-beauty-brunette-exotic-face-girl-head-woman-thumbnail.png",
	desc: "Precio por unidad. Diversos colores y una textura de pulpo muy esponjosa.",
});
productList.push({
	name: "33-Bolso",
	price: 0,
	image: "https://i.imgur.com/x5qSVxO.jpg",
	desc: "Si quieres gritarle al mundo que eres una loca fanática de Hello Kitty, ahora puedes llevar tu manía a todas partes en tu coche o en tu mochila.",
});
productList.push({
	name: "34-Sandalias",
	price: 45,
	image: "https://i.imgur.com/8x8pLOL.jpg",
	desc: "Sandalias LOL! Floridas en tono blanco veraniego. Diseño sobrio. Cómoda y resistente.",
});
productList.push({
	name: "35-Bolso",
	price: 0,
	image: "https://i.imgur.com/0WdjjiN.jpg",
	desc: "Para los que extrañan las vervenas, el guaro, el relajo, las montoneras y un lugar donde los mafiosos se sientan como en casa... Además esas chivas a Juanchito con asalto incluído 😉",
});
productList.push({
	name: "36-Sandalias",
	price: 0,
	image: "https://publicdomainvectors.org/photos/BeautyNo03-Archness.png",
	desc: "Este hermoso collar largo de estilo florido ha sido hecho a mano	 en base a semillas y materiales ecológicos.",
});
productList.push({
	name: "37-Bolso",
	price: 0,
	image: "https://i.imgur.com/a5uAXwb.jpg",
	desc: "Un extraordinario sombrero que combina el glamour pueblerino y la sofisticación de la ciudad. Y en una mujer sexy se ve mejor.",
});
productList.push({
	name: "38-Sandalias",
	price: 45,
	image:
		"https://i.imgur.com/UWQ4NuI.jpghttps://i.ibb.co/98Xhgb9/3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	desc: "Sandalias clásicas en negro titanio. hermosas y se adaptan al pie con comodidad",
});
productList.push({
	name: "39-Bolso",
	price: 0,
	image: "https://i.imgur.com/ri4FW1Q.jpg",
	desc: "Precio por unidad. Diversos colores y una textura de pulpo muy esponjosa.😸",
});
productList.push({
	name: "40-Sandalias",
	price: 0,
	image: "https://png.vector.me/files/images/2/5/256006/beauty_no11_rapture",
	desc: "😉",
});
productList.push({
	name: "41-Bolso",
	price: 0,
	image: "https://i.imgur.com/bQoj5zm.jpg",
	desc: "😉",
});
productList.push({
	name: "42-Sandalias",
	price: 45,
	image: "https://i.imgur.com/5ihFhek.jpg",
	desc: "Sandalias clásicas en negro titánio. hermosas y se adaptan al pie con comodidad.🧵🌈",
});
productList.push({
	name: "43-Bolso",
	price: 0,
	image: "https://i.imgur.com/taPyMwO.jpg",
	desc: "😉",
});
productList.push({
	name: "44-Sandalias",
	price: 0,
	image: "https://freesvg.org/img/African-Woman-Portrait.png",
	desc: "😉",
});
productList.push({
	name: "1-Bolso",
	price: 70,
	image: "https://i.imgur.com/ZRMXOJt.jpg",
	desc: "Crochet de punto para este hermoso bolso elaborado a mano, de tonos caoba en flores. Realizado en hilo terlenka y chapas de latas.",
});
productList.push({
	name: "46-Sandalias",
	price: 0,
	image:
		"https://w7.pngwing.com/pngs/976/449/png-transparent-beauty-brunette-face-girl-head-woman-thumbnail.png",
	desc: "😉",
});
productList.push({
	name: "47-Bolso",
	price: 60,
	image: "https://i.imgur.com/GaJ0r3J.jpg",
	desc: "😉",
});
productList.push({
	name: "48-Sandalias",
	price: 0,
	image: "http://www.clker.com/cliparts/v/E/F/x/n/t/woman-looking-down-md.png",
	desc: "😉",
});
productList.push({
	name: "49-Bolso",
	price: 0,
	image: "https://i.imgur.com/pdFUBr6.jpg",
	desc: "😉",
});
productList.push({
	name: "50-Sandalias",
	price: 50,
	image: "https://i.imgur.com/QAMimnz.jpg",
	desc: "😉",
});
productList.push({
	name: "51-Bolso",
	price: 0,
	image: "https://i.imgur.com/w0n8Sz0.jpg",
	desc: "😉",
});
productList.push({
	name: "52-Sandalias",
	price: 0,
	image: "https://i.imgur.com/jGirhp8.png",
	desc: "😉",
});
productList.push({
	name: "53-Bolso",
	price: 0,
	image: "https://i.imgur.com/LQz4Jw2.jpg",
	desc: "Bolso estilo gatita tejido a mano con hilo Terlenka (crochet) y como materia prima uso de chapas de bebidas enlatadas. Disponible en gran variedad de colores.🧶♻️",
});
productList.push({
	name: "54-Sandalias",
	price: 0,
	image: "https://i.imgur.com/a4hYABK.png",
	desc: "😉",
});
productList.push({
	name: "55-Bolso",
	price: 0,
	image: "https://i.imgur.com/2z1epVn.png",
	desc: "😉",
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

	/* Creacion de elemtentos HTML */
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
