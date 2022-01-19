import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario
  constructor(private usuarioService:UsuarioService) { 
    this.usuario=new Usuario()
  }

  ngOnInit(): void {
    console.log(this.usuario)
  }
  logueo() {
    this.usuarioService.existe(this.usuario.correo,this.usuario.password).subscribe((resProfesor: any) =>
    {
    console.log(resProfesor);
    if(resProfesor)
    {
    localStorage.setItem('correo',this.usuario.correo);
    //this.router.navigateByUrl('/menu');
    }
    },
    err => console.error(err)
    );
    //console.log("logueo");
    console.log(this.usuario);
  }

}
