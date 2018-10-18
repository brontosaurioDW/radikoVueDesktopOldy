// -----------------------------------
// Página principal
// -----------------------------------
let HomePage = {
	template: `
		<div>
			<section class="container my-4">
				<div class="row">
					<div class="col-12">
						<h2>Home (Dashboard)</h2>
						<p>Bienvenidos a Rádiko. Tu huerta cerca! Vivi sano y compranos</p>
					</div>
				</div>
			</section>
		</div>
	`
};
Vue.component('HomePage', HomePage);


// -----------------------------------
// Listado de productos
// -----------------------------------
let ProductsPage = {
	template: `
		<div>
			<section class="container my-4">
				<div class="row">
					<div class="col-12">
						<h2>Huerta - Listado de productos</h2>
						<p>La siguiente lista muestra el listado de productos de la huerta.</p>
					</div>
				</div>
			</section>
			<section class="container my-4">
				<div class="row">
					<div class="col-12">
						<router-link to="/productos/create" class="btn btn-secondary mb-4">Crear un nuevo producto</router-link>
							<products-table></products-table>
					</div>
				</div>
			</section>
		</div>
	`
};
Vue.component('ProductsPage', ProductsPage);


// -----------------------------------
// Listado de productos 
// Component: products-table
// -----------------------------------
let productsTable = {
	template: `
	<div class="products-table">
		<table class="table">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Producto</th>
		      <th scope="col">Precio</th>
		      <th scope="col">Stock</th>
		      <th scope="col">Acciones</th>
		    </tr>
		  </thead>
		  <tbody>
		  	<products-table-row 
		  		v-for="producto in productos"
		  		:producto="producto"
		  		:key="producto.id_producto"
	  		></products-table-row>
		  </tbody>
		</table>
	</div>
	`,
	data() {
		return {
			productos: []
		}
	},
	/*computed: {
		estado: function() {
			if (this.productos.estado) {
				return 'Activo';
			} else {
				return 'Inactivo';
			}
		}
	},*/
	mounted() {
		fetch('api/productos.php')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.productos = data;
			});
	}
};
Vue.component('productsTable', productsTable);


// -----------------------------------
// Listado de productos 
// Component: products-table-row
// -----------------------------------
let productsTableRow = {
	template: `
		<tr>
			<td>{{ producto.id_producto }}</td>
			<td>{{ producto.producto }}</td>
			<td>{{ producto.precio }}</td>
			<td>{{ estado }}</td>
			<td>
				<router-link :to="'/productos/' + producto.id_producto" class="btn btn-secondary btn-sm">Ver</router-link>
				<router-link :to="'/productos/edit/' + producto.id_producto" class="btn btn-secondary btn-sm">Editar</router-link>
				<router-link :to="'/productos/' + producto.id_producto" class="btn btn-secondary btn-sm">Eliminar</router-link>
			</td>
		</tr> 
	`,
	data() {
		return {
			//productos: []
		}
	},
	computed: {
		estado: function() {
			if (this.producto.activo == "1") {
				return 'Activo';
			} else {
				return 'Inactivo';
			}
		}
	},
	props: {
		producto: Object
	}
	/*mounted() {
		fetch('api/productos.php')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.productos = data;
			});
	}*/
};
Vue.component('productsTableRow', productsTableRow);


// -----------------------------------
// Detalle de producto
// -----------------------------------
let ProductDetailPage = {
	template: `
	<div>
		<section class="container my-4">
			<div class="row">
				<div class="col-12">
					<h2>{{producto.producto}}</h2>
					<p>{{producto.descripcion}}</p>
				</div>
			</div>
		</section>

		<section class="container">
			<div class="row">
				<div class="col-12">
					<ul class="list-group list-group-flush mb-4">
					  <li class="list-group-item"><b>Marca:</b> {{producto.marca}}</li>
					  <li class="list-group-item"><b>Precio:</b> {{producto.precio}}</li>
					  <li class="list-group-item"><b>Foto:</b> {{producto.foto}}</li>
					  <li class="list-group-item"><b>Stock:</b> {{producto.stock}}</li>
					  <li class="list-group-item"><b>Activo:</b> {{producto.activo}}</li>
					  <li class="list-group-item"><b>Fecha de alta:</b> {{producto.fecha_alta}}</li>
					  <li class="list-group-item"><b>Fecha de baja:</b> {{producto.fecha_baja}}</li>
					</ul>	   
					<router-link class="btn btn-secondary" to="/">Editar</router-link>
				</div>
			</div>
		</section>
	</div>
	`,
	data() {
		return {
			producto: {}
		};
	},
	mounted() {

		let id = this.$route.params.id;
		fetch('api/producto.php?id=' + id)
			.then(response => response.json())
			.then(data => {
				this.producto = data;
			});
	}
};
Vue.component('ProductDetailPage', ProductDetailPage);


// -----------------------------------
// Formulario de creacion de producto
// -----------------------------------
let ProductCreateFormPage = {
	template: `
	<div>
		<section class="container my-4">
			<div class="row">
				<div class="col-12">

					<h2>Crear producto</h2>
					<p>Completá el formulario para crear un nuevo producto</p>

				</div>
			</div>
		</section>

		<section class="container">
			<div class="row">
				<div class="col-12">

					<form @submit.prevent="grabar(producto)" class="needs-validation" novalidate>

					  <div class="form-group row">
					    <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="nombre" v-model="producto.producto">
					      <div class="invalid-feedback">Este campo es requerido</div>
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="descripcion" class="col-sm-2 col-form-label">Descripción:</label>
					    <div class="col-sm-10">
					      <textarea class="form-control" id="descripcion" col="5" rows="5" v-model="producto.descripcion">
					      </textarea>
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="marca" class="col-sm-2 col-form-label">Marca:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="marca" v-model="producto.marca">
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="precio" class="col-sm-2 col-form-label">Precio:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="precio" v-model="producto.precio">
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="stock" class="col-sm-2 col-form-label">Stock:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="stock" v-model="producto.stock">
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="estado" class="col-sm-2 col-form-label">Estado:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="estado" v-model="producto.estado">
					    </div>
					  </div>

					  <div class="form-group row">
					    <div class="col-sm-10 offset-sm-2">
							<button type="submit" class="btn btn-primary">Crear producto</button>
					    </div>
					  </div>

					</form>

				</div>
			</div>
		</section>
	</div>
	`,
	data() {
		return {
			producto: {
				producto: '',
				descripcion: '',
				marca: '',
				precio: '',
				stock: '',
				estado: '',
			},
			statusMsg: null,
			status: null
		}
	},
	methods: {
		grabar(producto) {
			console.log('grabando...')
			fetch('api/grabar-producto.php', {
				method: 'POST',
				body: JSON.stringify(producto)
			})
			.then(response => response.json())
			.then(data => {
				if(data.status == 1) {
					this.status = 1;
					this.statusMsg = "producto guardado";
					router.push({ path: '/', message: this.statusMsg });
				} else {
					this.status = 0;
					this.statusMsg = "Error - Algo salió mal"
				}
			});
		}
	}
};
Vue.component('ProductCreateFormPage', ProductCreateFormPage);


// -----------------------------------
// Formulario de edición de producto
// -----------------------------------
let ProductEditFormPage = {
	template: `
	<div>
		<section class="container my-4">
			<div class="row">
				<div class="col-12">

					<h2>Editar producto</h2>
					<p>Completá el formulario para editar un nuevo producto</p>

				</div>
			</div>
		</section>

		<section class="container">
			<div class="row">
				<div class="col-12">

					<form @submit.prevent="editar(producto)" class="needs-validation" novalidate>

					  <div class="form-group row">
					    <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="nombre" v-model="producto.producto">
					      <div class="invalid-feedback">Este campo es requerido</div>
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="descripcion" class="col-sm-2 col-form-label">Descripción:</label>
					    <div class="col-sm-10">
					      <textarea class="form-control" id="descripcion" col="5" rows="5" v-model="producto.descripcion">
					      </textarea>
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="marca" class="col-sm-2 col-form-label">Marca:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="marca" v-model="producto.marca">
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="precio" class="col-sm-2 col-form-label">Precio:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="precio" v-model="producto.precio">
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="stock" class="col-sm-2 col-form-label">Stock:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="stock" v-model="producto.stock">
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="estado" class="col-sm-2 col-form-label">Estado:</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="estado" v-model="producto.activo">
					    </div>
					  </div>

					  <div class="form-group row">
					    <div class="col-sm-10 offset-sm-2">
							<button type="submit" class="btn btn-primary">Editar producto</button>
					    </div>
					  </div>

					</form>

				</div>
			</div>
		</section>
	</div>
	`,
	data() {
		return {
			producto: [],
			statusMsg: null,
			status: null
		}
	},
	mounted() {
		let id = this.$route.params.id;
		fetch('api/producto.php?id=' + id)
			.then(response => response.json())
			.then(data => {
				this.producto = data;
			});
	},
	methods: {
		editar(producto) {
			console.log('editando...')
			fetch('api/editar-producto.php', {
				method: 'POST',
				body: JSON.stringify(producto)
			})
			.then(response => response.json())
			.then(data => {
				if(data.status == 1) {
					this.status = 1;
					this.statusMsg = "producto guardado";
					router.push({ path: '/', message: this.statusMsg });
				} else {
					this.status = 0;
					this.statusMsg = "Error - Algo salió mal"
				}
			});
		}
	}
};
Vue.component('ProductEditFormPage', ProductEditFormPage);

const routes = [
	{path: '/', component: HomePage},
	{path: '/productos', component: ProductsPage},
	{path: '/productos/create', component: ProductCreateFormPage},
	{path: '/productos/edit/:id', component: ProductEditFormPage},
	{path: '/productos/:id', component: ProductDetailPage}
];

const router = new VueRouter({
	routes
});

const app = new Vue({
	el: '#app',
	router,
	template: `
		<div id="app"> 
			<header>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">

				  <router-link to="/" class="navbar-brand">Rádiko</router-link>

				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav ml-auto">
				      <li class="nav-item active">
				      <router-link to="/" class="nav-link">Home (dashboard)</router-link>
				      </li>
				      <li class="nav-item">
				      <router-link to="/productos" class="nav-link">Listado de huertas</router-link>
				      </li>
				    </ul>
				  </div>

				</nav>
			</header>

			<main class="main-content">
				<router-view></router-view>
			</main>
		</div>
	`
});


// Validación de Bootstrap
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();