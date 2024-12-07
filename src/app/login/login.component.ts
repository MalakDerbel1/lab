import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicee } from 'src/Services/AuthServicee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private Auth : AuthServicee,private router:Router){}

  signin():void{
    console.log("result");

    //utiliser authservice 
    this.Auth.doGoogleLogin().then((result)=>{
      console.log(result);
      this.router.navigate(['/dashboard'])
    })

  }

}
