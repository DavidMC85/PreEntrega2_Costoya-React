const misProductos = [{
		id: "1",
		nombre: "Bastoncitos de Muzzarella",
		precio: 1500,
		img: "../img/1bastoncitos.jpg",
		idCat: "1",
		detail: "Bastoncitos rebozados, fritos, hechos con la mas fresca muzza!",
	},
	{
		id: "2",
		nombre: "Varieté de Busquetas",
		precio: 1900,
		img: "../img/1brusquetas.jpg",
		idCat: "1",
		detail: "Variado de Brusquetas para degustar!!"
	},
	{
		id: "3",
		nombre: "Picada Clasica",
		precio: 2500,
		img: "../img/1picada.jpg",
		idCat: "1",
		detail: "Picada Clasica con una selección especial de nuestros mejores fiambres y quesos!"
	},
	{
		id: "4",
		nombre: "Cabrito al Asador",
		precio: 3500,
		img: "../img/2cabrito.jpg",
		idCat: "2",
		detail: "Cabrito hecho en el clásico Asador Criollo"
	},
	{
		id: "5",
		nombre: "Sopa de Jamon",
		precio: 2200,
		img: "../img/2sopa.jpg",
		idCat: "2",
		detail: "Sopa de Jamon cocido, con trozos de pan frito y panceta"
	},
	{
		id: "6",
		nombre: "Sorrentinos",
		precio: 2700,
		img: "../img/2sorrentinos.jpg",
		idCat: "2",
		detail: "Sorrentinos a elección - Jamon y Queso, Verdura y Ricota, Salmón Rosado"
	},
	{
		id: "7",
		nombre: "Brownie",
		precio: 1800,
		img: "../img/3brownie.jpg",
		idCat: "3",
		detail: "Delicioso Brownie con bocha de helado de crema"
	},

	{
		id: "8",
		nombre: "Flan Casero",
		precio: 1500,
		img: "../img/3flan.jpg",
		idCat: "3",
		detail: "Porción de Flan casero, con elección dulce de lecho y/o crema"
	},
	{
		id: "9",
		nombre: "Tiramisu",
		precio: 1900,
		img: "../img/3tiramisu.jpg",
		idCat: "3",
		detail:"Porcion del clásico y delicioso Tiramisú de la casa"
	},
]

export const getProductos = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(misProductos);
		}, 100)
	})
}

// actividad de clase 7; funcion similar pero devuelve 1 producto

export const getUnProducto = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const producto = misProductos.find(prod => prod.id === id);
			resolve(producto);
		}, 100)
	})

}

// funcion que retorna un array de una categoria determinada

export const getProductoPorCategoria = (idCategory) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const productosCategoria = misProductos.filter(prod => prod.idCat === idCategory);
			resolve(productosCategoria)
		}, 100)
	})

}