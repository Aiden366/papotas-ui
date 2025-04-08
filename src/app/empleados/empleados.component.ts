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
import { DialogAnimationsExampleDialog } from './dialog-animations-example-dialog.component';

export interface Empleado {
  nombre: string;
  puesto: string;
  departamento: string;
  salario: number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, MatInputModule, FormsModule, CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpleadosComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['nombre', 'puesto', 'departamento', 'salario', 'acciones'];
  empleados: Empleado[] = [{ nombre: 'Ana Torres', puesto: 'Asistente', departamento: 'Marketing', salario: 9000 }];

  formEmpleados: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    puesto: new FormControl('', Validators.required),
    departamento: new FormControl('', Validators.required),
    salario: new FormControl('', [Validators.required, Validators.min(0)])
  });

  guardarEmpleado() {
    this.empleados.push(this.formEmpleados.value);
    console.log(this.empleados);
  }

  editarEmpleado(empleado: Empleado) {
    this.formEmpleados.patchValue(empleado);
    console.log('Editando empleado:', empleado);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Empleado eliminado');
      }
    });
  }
}
