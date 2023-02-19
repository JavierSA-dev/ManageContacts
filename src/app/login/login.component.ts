import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../auth.service"
import { Usuario } from '../model/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario("", "");


  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {

  }

  onSubmit(data: any) {
    this.usuario = data;
    

    this.authService.login(this.usuario).subscribe((data: any) => {

      if (data.Token) {
        localStorage.setItem('token', data.Token); 
        this.router.navigate(['/contactos']);
      } else {
        console.log(data);
      }

    });
  }

  volver() {
    this.router.navigate(['/contactos']);
  }
}
