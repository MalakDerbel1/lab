import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  form!:FormGroup  
//injection
constructor(private Ms:MemberService , private router:Router){}

ngOnInit(){
  this.form=new FormGroup({
    cin:new FormControl(null ,[Validators.required]),
    name:new FormControl(null ,[Validators.required]),
    cv:new FormControl(null ,[Validators.required]),
    type:new FormControl(null ,[Validators.required]),

  })
}
sub(){
  console.log(this.form.value)
  //appeler la fonction du service
  this.Ms.AddMember(this.form.value).subscribe(()=>{
    //redirection 
    this.router.navigate([''])
  })
}


}
