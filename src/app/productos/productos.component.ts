import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, inject } from '@angular/core';
import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../empleados/dialog-animations-example-dialog.component';

export interface Producto {
  nombre: string;
  precio: number;
  sabor: string;
  stock: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, MatInputModule, FormsModule, CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['nombre', 'precio', 'sabor', 'stock', 'acciones'];
  productos: Producto[] = [
    { nombre: 'Papitas Clásicas', precio: 12.5, sabor: 'Sal', stock: 20 },
    { nombre: 'Papitas BBQ', precio: 15.0, sabor: 'Barbacoa', stock: 10 },
    { nombre: 'Papitas Limón', precio: 14.0, sabor: 'Limón', stock: 15 },
  ];

  formProductos: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', [Validators.required, Validators.min(0)]),
    sabor: new FormControl('', Validators.required),
    stock: new FormControl('', [Validators.required, Validators.min(0)])
  });

  guardarProducto() {
    this.productos.push(this.formProductos.value);
    console.log(this.productos);
  }

  editarProducto(producto: Producto) {
    this.formProductos.patchValue(producto);
    console.log('Editando producto:', producto);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Producto eliminado');
      }
    });
  }
}
