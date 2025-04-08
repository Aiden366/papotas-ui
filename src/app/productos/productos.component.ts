import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface Producto {
  nombre: string;
  precio: number;
  sabor: string;
  stock: number;
}

const PRODUCTOS: Producto[] = [
  { nombre: 'Papitas Clásicas', precio: 12.5, sabor: 'Sal', stock: 20 },
  { nombre: 'Papitas BBQ', precio: 15.0, sabor: 'Barbacoa', stock: 10 },
  { nombre: 'Papitas Limón', precio: 14.0, sabor: 'Limón', stock: 15 },
];

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  displayedColumns: string[] = ['nombre', 'precio', 'sabor', 'stock', 'acciones'];
  data: Producto[] = PRODUCTOS;

  // Para el formulario (sin funcionalidad)
  nuevoProducto: Producto = {
    nombre: '',
    precio: 0,
    sabor: '',
    stock: 0
  };
}
