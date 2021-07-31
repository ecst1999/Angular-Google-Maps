import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<MapaEditarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {  


      this.forma = fb.group({

        'titulo': data.titulo,
        'descripcion': data.descripcion

      });

    }

  ngOnInit(): void {
  }

  guardarCambios(){
    
    this.dialogRef.close(this.forma.value);
    
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }

}
