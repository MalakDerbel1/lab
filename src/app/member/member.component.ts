import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

//injection des dependances
//utiliser un service dans un composant
constructor(private Ms:MemberService ,private dialog:MatDialog){}

dataSource:Member[]=[]

// se charge avant le constructeur -- plus rapide
ngOnInit(){
  //gauche : variable droite:action
  this.Ms.GetAll().subscribe((result)=>{
    this.dataSource=result
  })
}
displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];


delete(id:string):void{

  //1-ouvrir la boite
  let dialogRef = this.dialog.open(ConfirmComponent, {
    height: '200px',
    width: '300px',
  });
  //2-attendre le resultat de l'utilisateur 
  dialogRef.afterClosed().subscribe( result => {

    if(result){ 
      //3-si il a fait le click sur confirm => 
      this.Ms.deleteMember(id).subscribe(()=>{ 
        //envoyer de nv la req Gett vers le back
        this.Ms.GetAll().subscribe((result)=>{
        this.dataSource=result
      })})

    }
  })

 
}
}
