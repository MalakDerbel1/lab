import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modalevt',
  templateUrl: './modalevt.component.html',
  styleUrls: ['./modalevt.component.css']
})
export class ModalevtComponent implements OnInit {


  form!:FormGroup
  constructor(public dialogRef: MatDialogRef<ModalevtComponent>) { }

  ngOnInit(){
    //initialisation de form 
    this.form=new FormGroup({
      titre:new FormControl(null ,[Validators.required]),
      datedebut:new FormControl(null ,[Validators.required]),
      datefin:new FormControl(null ,[Validators.required]),
      lieu:new FormControl(null ,[Validators.required]),
  
    })
  }

  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
