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
	Component: pedidos-table
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
					<th class="text-center">Día de entrega</th>
					<th class="text-center">Estado</th>
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
				this.pedidos = data;
			});
	}

};
Vue.component('pedidosTable', pedidosTable);


/*
	-----------------------------------
	Listado de pedidos 
	Component: pedidos-table-row
	-----------------------------------
*/
let pedidosTableRow = {
	template: `
		<tr>
			<td class="bold">#{{ pedido.id_pedido }}</td>
			<td>{{ pedido.nombre}} {{ pedido.apellido}}</td>
			<td class="text-center">$ {{ pedido.subtotal }}</td>
			<td class="text-center">{{ pedido.fecha_envio }}</td>
			<td class="text-center">{{ pedido.estado }}</td>
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


/*
	-----------------------------------
	Listado de productos
	Component: products-page
	-----------------------------------
*/
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


/*
	-----------------------------------
	Listado de productos 
	Component: products-table-row
	-----------------------------------
*/
let productsTableRow = {
	template: `
		<tr>
			<td>{{ producto.producto }}</td>
			<td>{{ marca }}</td>
			<td>$ {{ producto.precio }}</td>
			<td>{{ producto.stock }} {{ producto.unidad_de_medida }}</td>
			<td>{{ estado }}</td>
			<td>
				<router-link :to="'/productos/' + producto.id_producto" class="btn btn-primary">Ver</router-link>
				<router-link :to="'/productos/edit/' + producto.id_producto" class="btn btn-terciary">Editar</router-link>
				<a class="btn btn-secondary btn-sm" @click="eliminar(producto)">Eliminar</a>
			</td>
		</tr>
	`,

	computed: {

		estado: function() {
			if (this.producto.activo == "1") {
				return 'Publicado';
			} else {
				return 'No publicado';
			}
		},

		marca: function() {
			if(this.producto.marca == null) {
				return '-';
			}
				return this.producto.marca;
		}
	},

	props: {
		producto: Object
	},

	methods: {
		eliminar(producto) {
			fetch('api/eliminar-producto.php', {
				method: 'POST',
				body: JSON.stringify(producto)
			})
			.then(response => response.json())
			.then(data => {
				if(data.status == 1) {
					this.status = 1;
					this.statusMsg = "producto eliminado";
					router.push({ path: '/productos', message: this.statusMsg });
				} else {
					this.status = 0;
					this.statusMsg = "Error - Algo salió mal"
				}
			});
		}
	}
};
Vue.component('productsTableRow', productsTableRow);


/*
	-----------------------------------
	Detalle de producto
	Component: product-detail-page
	-----------------------------------
*/
let ProductDetailPage = {
	template: `
		<div class="simple-page">

			<div class="simple-box box-a product">
				<div class="flex flex-top">
					<div class="product-left">
						<div class="product-photo">
							<img src="https://d26lpennugtm8s.cloudfront.net/stores/120/084/products/imagen18-6cc3393074105981b315122095252932-1024-1024.png" alt="Aceitunas">
						</div>
						<div class="product-info">
							<h2>{{producto.producto}}</h2>
							<p>
								{{ producto.descripcion }}
							</p>
						</div>						
					</div>

					<div class="product-right">
						<h3>Info del producto</h3>
						<table class="table-c">
							<tr>
								<th>Marca</th>
								<td>{{ producto.marca }}</td>
							</tr>
							<tr>
								<th>Precio</th>
								<td>$ {{ producto.precio }}</td>
							</tr>
							<tr>
								<th>Publicado</th>
								<td>{{ publicado }}</td>
							</tr>
							<tr class="stock-ok"> <!-- class="stock-no" si no hay stock -->
								<th>Stock</th>
								<td class="bold">{{ producto.stock }} {{ producto.unidad }}</td>
							</tr>								
						</table>

						<div class="product-bottom">
							<router-link :to="'/productos/edit/' + producto.id_producto" class="btn btn-terciary">Editar</router-link>
							<a class="btn btn-secondary btn-sm" @click="eliminar(producto)">Eliminar</a>
						</div>

					</div>
				</div>
			</div>				
		</div>
	`,

	data() {
		return {
			producto: {}
		};
	},

	computed: {
		publicado: function() {
			if (this.producto.activo == "1") {
				return 'Sí';
			} else {
				return 'No';
			}
		}
	},

	methods: {
		eliminar(producto) {
			fetch('api/eliminar-producto.php', {
				method: 'POST',
				body: JSON.stringify(producto)
			})
			.then(response => response.json())
			.then(data => {
				if(data.status == 1) {
					this.status = 1;
					this.statusMsg = "producto eliminado";
					router.push({ path: '/productos', message: this.statusMsg });
				} else {
					this.status = 0;
					this.statusMsg = "Error - Algo salió mal"
				}
			});
		}
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


/*
	-----------------------------------
	Formulario de creacion de producto
	Component: poduct-create-form-table
	-----------------------------------
*/
let ProductCreateFormPage = {
	template: `
		<div class="simple-page">
			<h2>Nuevo producto</h2>
			<p>Completa los siguientes datos para cargar un nuevo producto de tu huerta</p>
			
			<form @submit.prevent="grabar(producto)" class="form">
				<div class="form-row">
					<div class="wrap-input">
						<label class="label-input">Nombre del producto <span class="red bold">*</span></label>
						<input 
							class="input" 
							type="text" 
							name="nombre-producto" 
							placeholder="Escribe el nombre del producto"
							v-model="producto.producto">
					</div>

					<div class="wrap-input">
						<label class="label-input">Precio <span class="red bold">*</span></label>
						<input 
							class="input" 
							type="text" 
							name="precio-producto" 
							placeholder="¿Cuánto sale?"
							v-model="producto.precio">
					</div>

			  	<div class="wrap-input">
				    <label class="label-input" for="categorias">Categoría <span class="red bold">*</span></label>
				    <div>
					    <select v-model="producto.categoria" class="select" id="categorias">
					      <option v-for="categoria in categorias" :value="categoria.id_categoria">{{categoria.categoria}}</option>
					    </select>
				    </div>
				  </div>

					<div class="wrap-input">
						<label class="label-input">Marca <span class="red bold">*</span></label>
						<input 
							class="input" 
							type="text" 
							name="marca-producto" 
							placeholder="Agrega la marca"
							v-model="producto.marca">
					</div>

					<div class="flex">
						<div class="wrap-input half-input">
							<label class="label-input">Stock <span class="red bold">*</span></label>
							<input 
								class="input" 
								type="text" 
								name="stock-producto" 
								placeholder="¿Cuántos quedan?"
								v-model="producto.stock">
						</div>

						<div class="wrap-input half-input">
							<label class="label-input" for="unidad">Unidad de medida <span class="red bold">*</span></label>
							<div>
						    <select v-model="producto.unidad" class="select" id="unidades">
						      <option v-for="unidad in unidades" :value="unidad.id_unidad_medida">{{unidad.unidad_de_medida}}</option>
						    </select>
							</div>
						</div>							
					</div>

					<div class="wrap-input">
						<label class="label-input">Descripción <span class="red bold">*</span></label>
						<textarea 
							class="textarea" 
							name="nombre-producto" 
							cols="15"
							rows="5" 
							placeholder="Agrega una descripción del producto"
							v-model="producto.descripcion"></textarea>
					</div>

					<div class="text-right">
						<button class="btn btn-primary btn-lg">Agregar</button>
					</div>
				</div>
			</form>		
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

/*
	-----------------------------------
	Formulario de edición de producto
	Component: poduct-edit-form-table
	-----------------------------------
*/
let ProductEditFormPage = {
	template: `
		<div class="simple-page">
			<h2>Editar producto</h2>
			<p>Completa los siguientes datos para editar el producto</p>
			
			<form @submit.prevent="editar(producto)" class="form">
				<div class="form-row">
					<div class="wrap-input">
						<label class="label-input">Nombre del producto <span class="red bold">*</span></label>
						<input 
							class="input" 
							type="text" 
							name="nombre-producto" 
							placeholder="Escribe el nombre del producto"
							v-model="producto.producto">
					</div>

					<div class="wrap-input">
						<label class="label-input">Precio <span class="red bold">*</span></label>
						<input 
							class="input" 
							type="text" 
							name="precio-producto" 
							placeholder="¿Cuánto sale?"
							v-model="producto.precio">
					</div>

			  	<div class="wrap-input">
				    <label class="label-input" for="categorias">Categoría <span class="red bold">*</span></label>
				    <div>
					    <select v-model="producto.categoria" class="select" id="categorias">
					      <option v-for="categoria in categorias" :value="categoria.id_categoria">{{categoria.categoria}}</option>
					    </select>
				    </div>
				  </div>

					<div class="wrap-input">
						<label class="label-input">Marca <span class="red bold">*</span></label>
						<input 
							class="input" 
							type="text" 
							name="marca-producto" 
							placeholder="Agrega la marca"
							v-model="producto.marca">
					</div>

					<div class="flex">
						<div class="wrap-input half-input">
							<label class="label-input">Stock <span class="red bold">*</span></label>
							<input 
								class="input" 
								type="text" 
								name="stock-producto" 
								placeholder="¿Cuántos quedan?"
								v-model="producto.stock">
						</div>

						<div class="wrap-input half-input">
							<label class="label-input" for="unidad">Unidad de medida <span class="red bold">*</span></label>
							<div>
						    <select v-model="producto.unidad" class="select" id="unidades">
						      <option 
						      	v-for="unidad in unidades" 
						      	:value="unidad.id_unidad_medida"
						      	:selected="selected">{{unidad.unidad_de_medida}}</option>
						    </select>
							</div>
						</div>							
					</div>

					<div class="wrap-input">
						<label class="label-input">Descripción <span class="red bold">*</span></label>
						<textarea 
							class="textarea" 
							name="nombre-producto" 
							cols="15"
							rows="5" 
							placeholder="Agrega una descripción del producto"
							v-model="producto.descripcion"></textarea>
					</div>

					<div class="text-right">
						<button class="btn btn-primary btn-lg">Editar</button>
					</div>
				</div>
			</form>		
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

	computed: {
		selected() {
			return 'selected';
		}
	},

	mounted() {
		let id = this.$route.params.id;
		fetch('api/producto.php?id=' + id)
			.then(response => response.json())
			.then(data => {
				this.producto = data;
				console.log(data)
			});
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
	},

	methods: {
		editar(producto) {
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


/*
	-----------------------------------
	Datos de la huerta
	Component: datos-huerta
	-----------------------------------
*/
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
