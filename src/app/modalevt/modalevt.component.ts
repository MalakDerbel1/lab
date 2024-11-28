import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modalevt',
  templateUrl: './modalevt.component.html',
  styleUrls: ['./modalevt.component.css']
})
export class ModalevtComponent implements OnInit {

x:any;
  form!:FormGroup
  constructor(public dialogRef: MatDialogRef<ModalevtComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    // reception de evt by @inject
   this.x=data;
   console.log("from modal",this.x)
  }

  ngOnInit(){

    if(this.x){
      //extraction from x 
   //initialisation de form 
   this.form=new FormGroup({
    titre:new FormControl(this.x.titre ,[Validators.required]),
    datedebut:new FormControl(this.x.datedebut ,[Validators.required]),
    datefin:new FormControl(this.x.datefin ,[Validators.required]),
    lieu:new FormControl(this.x.lieu ,[Validators.required]),
  })
    }else{
       //initialisation de form 
    this.form=new FormGroup({
      titre:new FormControl(null ,[Validators.required]),
      datedebut:new FormControl(null ,[Validators.required]),
      datefin:new FormControl(null ,[Validators.required]),
      lieu:new FormControl(null ,[Validators.required]),
    })
    } 
  }


  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
