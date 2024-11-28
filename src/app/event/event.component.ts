import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/evt';
import { EvtService } from 'src/Services/evt.service';
import { ModalevtComponent } from '../modalevt/modalevt.component';
import { MatDialog } from '@angular/material/dialog';

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

  displayedColumns: string[] = ['1', '2', '3', '4','5'];

// le type de filtre est de type MatTableDataSource donc il faut transfomer le result en MatTableDataSource it etait de type event 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open():void{
    console.log("aaa")
    let dialogRef = this.dialog.open(ModalevtComponent, {
      height: '500px',
      width: '400px',
    });
  //le retour de boite est le form.value de modalevt

    dialogRef.afterClosed().subscribe((a)=>{
      this.Es.AddEvent(a).subscribe(()=>{

        this.Es.getAllEvt().subscribe((result)=>{
          this.dataSource.data=result
        })
      })
    })
  }

  
}
