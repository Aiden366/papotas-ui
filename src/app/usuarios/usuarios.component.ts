import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

export interface Usuario {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
}




@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule, MatInputModule, FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsuariosComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['nombre', 'correo', 'telefono', 'direccion', 'acciones'];
  usuarios: Usuario[] = [ { nombre: 'Ana Torres', correo: 'Asistente', telefono: 'Marketing', direccion: "pocholos" }];

  formUsuarios:any = new FormGroup({
    nombre:new FormControl('',Validators.required),
    correo:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required)
  });

  guardarUsuario(){

    this.usuarios.push(this.formUsuarios.value);
    console.log(this.usuarios);
  }
  editarUsuario(u:any){
    console.log(u);
    this.formUsuarios.get('nombre')?.setValue(u.nombre);
    this.formUsuarios.setValue(u);
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
@Component({
  selector: 'dialog-delete-usuario',
  templateUrl: '../delete-usuario/delete-usuario.component.html',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}
