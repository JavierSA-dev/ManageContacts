import { Component, OnInit } from '@angular/core';
import { ContactosServiceService } from '../contactos-service.service';
import { Contacto } from '../model/contacto';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css'],
  providers: [ContactosServiceService]
})

export class ListarContactosComponent implements OnInit{
  public contactos: any;

  constructor(private contactosService: ContactosServiceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }
  
  eliminarContacto(contacto: Contacto) {
    console.log(contacto);
    
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${contacto.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.contactosService.deleteContacto(contacto.id).subscribe(data=>{
          this.contactos = this.getContactos()});   
        
        this.contactosService.deleteContacto(contacto.id)
          .subscribe(() => {
            this.getContactos();
            this.snackBar.open('Contacto eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  } 
  ngOnInit() {
    this.getContactos();
   
  }

  getContactos(): void {

    this.contactosService.getContactos().subscribe(
      (result:any)=>{
       
        this.contactos = result;
       
      });
  }


}