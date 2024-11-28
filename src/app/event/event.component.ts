import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/evt';
import { EvtService } from 'src/Services/evt.service';
import { ModalevtComponent } from '../modalevt/modalevt.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{


  constructor(private Es:EvtService,private dialog:MatDialog){}
// importation de MatTableDataSource
  dataSource=new MatTableDataSource()

  ngOnInit(){
    this.Es.getAllEvt().subscribe((result)=>{
      this.dataSource.data=result
    })
  }

  displayedColumns: string[] = ['1', '2', '3', '4','5','6'];

// le type de filtre est de type MatTableDataSource donc il faut transfomer le result en MatTableDataSource it etait de type event 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open(): void {
    console.log("aaa");
    let dialogRef = this.dialog.open(ModalevtComponent, {
      height: '500px',
      width: '400px',
    });
  
    // The return value of the modal is the form.value of ModalevtComponent
    dialogRef.afterClosed().subscribe((a) => {
      // Ensure the returned value is not null or undefined
      if (a) {
        this.Es.AddEvent(a).subscribe(() => {
          this.Es.getAllEvt().subscribe((result) => {
            this.dataSource.data = result;
          });
        });
      } else {
        console.log("Modal closed without data");
      }
    });
  }

  open1(id:string){
    //ouvrir la boite
    const dialogConfig = new MatDialogConfig();
    // chercher event by id 
    this.Es.getEvtById(id).subscribe((E)=>{

      console.log("EEE",E);
// envoie de evt 
    dialogConfig.data =E               //evt a faire passer au modal

  let dialogRef=  this.dialog.open(ModalevtComponent, dialogConfig);
  dialogRef.afterClosed().subscribe((a) => {

if(a){
  this.Es.updateEvt(a,id).subscribe(()=> {
    //r"efresh 
    //envoyer de nv une req get 
    this.Es.getAllEvt().subscribe((result) => {
      this.dataSource.data = result;
    });
  })} else {
        console.log("Modal closed without data");
      }

  })
  
})}
delete(id:string){
  let dialogRef = this.dialog.open(ConfirmComponent, {
    height: '250px',
    width: '350px',
  });
  dialogRef.afterClosed().subscribe( result => {
// la boite retourne true or false dans result 
    if(result){ 
  this.Es.deleteEvtById(id).subscribe(()=>{
    this.Es.getAllEvt().subscribe((result) => {
      this.dataSource.data = result;
    });
  })}
  })
}


}
