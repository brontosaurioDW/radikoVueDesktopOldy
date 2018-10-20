/*
	------------------------
	HomePage
	------------------------
*/
let HomePage = {
	template: `
		<div>
			<info-top></info-top>

			<div class="flex flex-top">
				<div class="col-8">
					
					<h2>Pedidos Pendientes</h2>

					<div class="simple-box box-a">
						<pedidos-table></pedidos-table>

						<a href="#" class="basic">Ver todos</a>
					</div>
				</div>

				<div class="col-4">		

					<h2>Últimos mensajes</h2>				

					<div class="simple-box box-a">
						<table class="table-a">
							<thead>
								<tr>
									<th>Cliente</th>
									<th class="text-center">Pedido</th>
									<th class="text-center">Hora</th>
									<th></th>
								</tr>
							</thead>
							<tr>
								<td>Pepe Garcia</td>
								<td class="text-center">#1532</td>
								<td class="text-center">10-05 | 20.50 hs</td>
								<td class="text-right">
									<a href="#">
										<i class="icon icon-ch-right"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>Pepe Garcia</td>
								<td class="text-center">#1532</td>
								<td class="text-center">10-05 | 20.50 hs</td>
								<td class="text-right">
									<a href="#">
										<i class="icon icon-ch-right"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>Pepe Garcia</td>
								<td class="text-center">#1532</td>
								<td class="text-center">10-05 | 20.50 hs</td>
								<td class="text-right">
									<a href="#">
										<i class="icon icon-ch-right"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>Pepe Garcia</td>
								<td class="text-center">#1532</td>
								<td class="text-center">10-05 | 20.50 hs</td>
								<td class="text-right">
									<a href="#">
										<i class="icon icon-ch-right"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>Pepe Garcia</td>
								<td class="text-center">#1532</td>
								<td class="text-center">10-05 | 20.50 hs</td>
								<td class="text-right">
									<a href="#">
										<i class="icon icon-ch-right"></i>
									</a>
								</td>
							</tr>
							<tr>
								<td>Pepe Garcia</td>
								<td class="text-center">#1532</td>
								<td class="text-center">10-05 | 20.50 hs</td>
								<td class="text-right">
									<a href="#">
										<i class="icon icon-ch-right"></i>
									</a>
								</td>
							</tr>
						</table>

						<a href="#" class="basic">Ver todos</a>
					</div>
				</div>
			</div>
		</div>
	`
};
Vue.component('HomePage', HomePage);


/*
	------------------------
	infoTop
	------------------------
*/
let infoTop = {
	template: `
		<div class="info-top">
			<ul>
				<li>
					<a href="#">
						<span>
							<i class="icon icon-cart"></i>
							<span>
								<span class="bold">25</span>
								pedidos nuevos
							</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<i class="icon icon-chat"></i>
							<span>
								<span class="bold">6</span>
								mensajes nuevos
							</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<i class="icon icon-fruit"></i>
							<span>
								<span class="bold">18</span>
								prod. sin stock
							</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<i class="icon icon-fruit"></i>
							<span>
								<span class="bold">29</span>
								productos totales
							</span>
						</span>
					</a>
				</li>
			</ul>
		</div>		
	`
}
Vue.component('infoTop', infoTop);


/*
	------------------------
	listado de pedidos
	------------------------
*/
let pedidosTable = {
	template: `
		<table class="table pedidos-table table-a">
		  <thead>
				<tr>
					<th>N°</th>
					<th>Cliente</th>					
					<th class="text-center">Precio</th>
					<th class="text-center">Dia</th>
					<th class="text-center">Pago</th>
					<th></th>
				</tr>
		  </thead>
		  <tbody>
		  	<pedidos-table-row 
		  		v-for="pedido in pedidos"
		  		:pedido="pedido"
		  		:key="pedido.id_pedido"
	  		></pedidos-table-row>
		  </tbody>
		</table>
	`,

	data() {
		return {
			pedidos: []
		}
	},

	mounted() {
		fetch('api/pedidos.php?id=1')
			.then(respuesta => respuesta.json())
			.then(data => {
				console.log(data)
				this.pedidos = data;
			});
	}

};
Vue.component('pedidosTable', pedidosTable);


/*
	-----------------------------------
	Listado de pedidos 
	Component: products-table-row
	-----------------------------------
*/
let pedidosTableRow = {
	template: `
		<tr>
			<td class="bold">#{{ pedido.id_pedido }}</td>
			<td>{{ pedido.nombre}} {{ pedido.apellido}}</td>
			<td class="text-center">$ {{ pedido.subtotal }}</td>
			<td class="text-center">{{ pedido.fecha_pedido }}</td>
			<td class="text-center">{{ pedido.tipo_pago }}</td>
			<td class="text-right">
				<a href="#">
					<i class="icon icon-ch-right"></i>
				</a>
			</td>
		</tr>
	`,

	props: {
		pedido: Object
	}
};
Vue.component('pedidosTableRow', pedidosTableRow);


// -----------------------------------
// Listado de productos
// -----------------------------------
let ProductsPage = {
	template: `
		<div class="simple-page">

			<h2>Listado de productos de tu huerta</h2>
			<p>Acá podés visualizar todos tus productos, editarlos o eliminarlos</p>
			
			<router-link to="/productos/create" class="btn btn-primary btn-lg cta-abs">
				<i class="bold">+</i>
				<span>Agregar producto</span>
			</router-link>

			<div class="simple-box">
				<products-table></products-table>


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
		<table class="table-b products-table">
			<thead>
				<tr>
					<th>Producto</th>
					<th>Marca</th>
					<th>Precio</th>
					<th>Stock</th>
					<th>Estado</th>
					<th>Acciones</th>
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
	`,

	data() {
		return {
			productos: []
		}
	},

	mounted() {
		fetch('api/productos.php')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.productos = data;
				console.log(data);
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
						<td>{{ producto.producto }}</td>
						<td>{{ producto.marca }}</td>
						<td>$ {{ producto.precio }}</td>
						<td>{{ producto.stock }} {{ producto.unidad_de_medida }}</td>
						<td>{{ estado }}</td>
						<td>
							<router-link :to="'/productos/' + producto.id_producto" class="btn btn-primary">Ver</router-link>
							<router-link :to="'/productos/edit/' + producto.id_producto" class="btn btn-terciary">Editar</router-link>
							<router-link :to="'/productos/' + producto.id_producto" class="btn btn-secondary btn-sm">Eliminar</router-link>
						</td>
					</tr>

	`,

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
					    <label for="unidad" class="col-sm-2 col-form-label">Unidad de medida:</label>
					    <div class="col-sm-10">
						    <select v-model="producto.unidad" class="form-control" id="unidades">
						      <option v-for="unidad in unidades" :value="unidad.id_unidad_medida">{{unidad.unidad_de_medida}}</option>
						    </select>
					    </div>
					  </div>

					  <div class="form-group row">
					    <label for="categorias" class="col-sm-2 col-form-label">Categorias:</label>
					    <div class="col-sm-10">
						    <select v-model="producto.categoria" class="form-control" id="categorias">
						      <option v-for="categoria in categorias" :value="categoria.id_categoria">{{categoria.categoria}}</option>
						    </select>
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
				categoria: '',
				estado: '',
			},
			categorias: [],
			unidades: [],
			statusMsg: null,
			status: null
		}
	},

	methods: {
		grabar(producto) {
			fetch('api/grabar-producto.php', {
				method: 'POST',
				body: JSON.stringify(producto)
			})
			.then(response => response.json())
			.then(data => {
				if(data.status == 1) {
					this.status = 1;
					this.statusMsg = "producto guardado";
					router.push({ path: '/productos', message: this.statusMsg });
				} else {
					this.status = 0;
					this.statusMsg = "Error - Algo salió mal"
				}
			});
		}
	},

	mounted() {
		fetch('api/categorias.php')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.categorias = data;
			});
		fetch('api/unidades.php')
			.then(respuesta => respuesta.json())
			.then(data => {
				this.unidades = data;
			});	
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
					router.push({ path: '/productos', message: this.statusMsg });
				} else {
					this.status = 0;
					this.statusMsg = "Error - Algo salió mal"
				}
			});
		}
	}
};
Vue.component('ProductEditFormPage', ProductEditFormPage);


let datosHuerta = {
	template: `
		<div class="user">
			<div class="user-photo">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdGlkKbVAKyIZ4nqEDssi0DZLKLCVi1m4KD92sPs8lC95-OUYBg" alt="Huerta" />
			</div>
			<div class="user-info">
				<span class="block bold">{{ huerta.nombre_huerta }}</span>
				<span>{{ huerta.razon_social }}</span>
			</div>
		</div>
	`,
	data() {
		return {
			huerta: []
		}
	},

	mounted() {
		fetch('api/huerta.php?id=1')
			.then(respuesta => respuesta.json())
			.then(data => {
				console.log(data);
				this.huerta = data;
			});
	}
};
Vue.component('datosHuerta', datosHuerta);

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
		<div class="dashboard">
			<div class="col-left">
				<h1>
	      	<router-link to="/" class="nav-link">
						Radiko
	      	</router-link>
				</h1>

				<datos-huerta></datos-huerta>

				<ul class="menu">

		      <li class="nav-item">
		      	<router-link to="/productos" class="nav-link">
							<i class="icon icon-fruit"></i>
							<span>Mis productos</span>
		      	</router-link>
		      </li>

					<li>
						<a href="#">
							<i class="icon icon-cart"></i>
							<span>Mis pedidos</span>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon icon-user"></i>
							<span>Mis datos</span>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon icon-chat"></i>
							<span>Chat</span>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon icon-logout"></i>
							<span>Cerrar sesión</span>
						</a>
					</li>
				</ul>
			</div>

			<div class="col-right">
				<router-view></router-view>
			</div>
		</div>
	`
});
