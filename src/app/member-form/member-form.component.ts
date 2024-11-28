import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  form!:FormGroup  
//injection
constructor(private Ms:MemberService , private router:Router, private activateRoute:ActivatedRoute){}

M!:Member;
idcourant!:string; // initialiser l'id selon le type

ngOnInit(){
// 1 recuperer id a partir de la route 
this.idcourant=this.activateRoute.snapshot.params['id'];// A.R : extraction de imgae de url ;snapshot : prendre une shot ;
//params : fragmentation 
console.log(this.idcourant);
if(!!this.idcourant){//existe et a une valeur

//2 si id existe dans la route je suis dans edit 
// getMemberByid ()=> extraction et placement dans le formulaire 
this.Ms.getMemberById(this.idcourant).subscribe((M)=>{
  this.form=new FormGroup({
    cin:new FormControl(M.cin ,[Validators.required]),
    name:new FormControl(M.name ,[Validators.required]),
    cv:new FormControl(M.cv ,[Validators.required]),
    type:new FormControl(M.type ,[Validators.required]),

  })

})
}else{

// sinon => je suis dans create 
  this.form=new FormGroup({
    cin:new FormControl(null ,[Validators.required]),
    name:new FormControl(null ,[Validators.required]),
    cv:new FormControl(null ,[Validators.required]),
    type:new FormControl(null ,[Validators.required]),

  })
}}
sub(){
  this.idcourant=this.activateRoute.snapshot.params['id'];
  if(!!this.idcourant){
    //update 
    this.Ms.updateMember(this.form.value,this.idcourant).subscribe(()=>{
      //redirection 
      this.router.navigate([''])
    })


  }else
  
  {
  console.log(this.form.value)
  //appeler la fonction du service
  this.M={
    ...this.form.value, //...extraire les attributs 
    createdDate: new Date().toISOString()
  }
  this.Ms.AddMember(this.M).subscribe(()=>{
    //redirection 
    this.router.navigate(['member'])
  })}
}}
