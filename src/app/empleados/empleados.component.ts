import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface Empleado {
  nombre: string;
  puesto: string;
  departamento: string;
  salario: number;
}

const EMPLEADOS: Empleado[] = [
  { nombre: 'Luis Morales', puesto: 'Administrador', departamento: 'Ventas', salario: 12000 },
  { nombre: 'Ana Torres', puesto: 'Asistente', departamento: 'Marketing', salario: 9000 }
];

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  displayedColumns: string[] = ['nombre', 'puesto', 'departamento', 'salario', 'acciones'];
  data: Empleado[] = EMPLEADOS;

  nuevoEmpleado: Empleado = {
    nombre: '',
    puesto: '',
    departamento: '',
    salario: 0
  };
}
