import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {path: 'productos', component:ProductosComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'home', component:HomeComponent},
  {path:'',component:HomeComponent}
];
